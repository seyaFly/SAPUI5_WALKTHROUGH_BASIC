sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "onem/seya/walkthrough/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
    Controller,
    JSONModel,
    formatter,
    Filter,
    FilterOperator
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step25.nest.InvoiceList", {
        formatter: formatter,
        onInit: function() {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },
        onFilterInvoices: function(oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
    });
});