sap.ui.define(
  [
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters",
    "sap/base/Log",
  ],
  function (MockServer, UriParameters, Log) {
    "use strict";

    return {
      init: function () {
        // create mock server
        var oMockServer = new MockServer({
          rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/",
        });

        var oUriParameters = new UriParameters(window.location.href);

        // configure mock server with a delay
        MockServer.config({
          autoRespond: true,
          autoRespondAfter: oUriParameters.get("serverDelay") || 500,
        });

        // simulate
        var sPath = "../localService";
        oMockServer.simulate(sPath + "/metadata.xml", {
          sMockdataBaseUrl: sPath + "/mockdata",
          bGenerateMissingMockData: true,
        });

        // configure mock server to handle requests
        var aRequests = oMockServer.getRequests();

        // Add custom request handlers if needed
        aRequests.push({
          method: "GET",
          path: new RegExp(".*"),
          response: function (oXhr, sUrlParams) {
            Log.info("MockServer received request: " + oXhr.url, "MockServer");
          },
        });

        oMockServer.setRequests(aRequests);

        // start
        oMockServer.start();

        Log.info("Running the app with mock data", "MockServer");
      },
    };
  }
);
