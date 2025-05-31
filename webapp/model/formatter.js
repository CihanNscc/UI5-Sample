sap.ui.define([], function () {
  "use strict";

  return {
    statusText: function (sStatus) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      switch (sStatus) {
        case "A":
          return resourceBundle.getText("invoicedStatusA");
        case "B":
          return resourceBundle.getText("invoicedStatusB");
        case "C":
          return resourceBundle.getText("invoicedStatusC");
        default:
          return sStatus;
      }
    },
  };
});
