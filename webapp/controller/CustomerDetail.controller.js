sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  function (Controller, JSONModel, UIComponent, History) {
    "use strict";
    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.CustomerDetail",
      {
        onInit: function () {
          console.log("CustomerDetail onInit called");
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("customerDetail")
            .attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
          console.log(
            "CustomerDetail _onObjectMatched called",
            oEvent.getParameter("arguments")
          );
          var sPath =
            "/" +
            window.decodeURIComponent(
              oEvent.getParameter("arguments").customerPath
            );
          console.log("Binding to path:", sPath);
          this.getView().bindElement({
            path: sPath,
            model: "northwind",
          });
        },
        onNavBack: function () {
          var oHistory = History.getInstance();
          var sPreviousHash = oHistory.getPreviousHash();

          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("overview", {}, true);
          }
        },
      }
    );
  }
);
