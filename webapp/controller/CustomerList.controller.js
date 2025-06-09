sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";
    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.CustomerList",
      {
        onFilterCustomers: function (oEvent) {
          var aFilter = [];
          var sQuery = oEvent.getParameter("query");
          if (sQuery) {
            aFilter.push(
              new Filter("CompanyName", FilterOperator.Contains, sQuery)
            );
            aFilter.push(
              new Filter("ContactName", FilterOperator.Contains, sQuery)
            );
            aFilter.push(
              new Filter("ContactTitle", FilterOperator.Contains, sQuery)
            );
            aFilter.push(new Filter("City", FilterOperator.Contains, sQuery));
            aFilter.push(
              new Filter("Country", FilterOperator.Contains, sQuery)
            );
          }
          var oList = this.byId("customerList");
          var oBinding = oList.getBinding("items");
          oBinding.filter(aFilter);
        },
        onSelectCustomer: function (oEvent) {
          var oItem = oEvent.getSource();
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("customerDetail", {
            customerPath: window.encodeURIComponent(
              oItem.getBindingContext("northwind").getPath().substr(1)
            ),
          });
        },
      }
    );
  }
);
