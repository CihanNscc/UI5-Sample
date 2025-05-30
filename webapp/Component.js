sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        var oModel = new JSONModel();
        oModel.setData({
          recipient: {
            name: "World",
          },
        });
        this.setModel(oModel);

        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
