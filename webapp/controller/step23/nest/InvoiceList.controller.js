sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "onem/seya/walkthrough/model/formatter"
], function(
    Controller,
    JSONModel,
    formatter
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step23.nest.InvoiceList", {
        formatter: formatter,
        onInit: function() {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});