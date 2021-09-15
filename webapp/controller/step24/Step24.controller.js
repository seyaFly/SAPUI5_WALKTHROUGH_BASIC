sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(
    Controller,
    JSONModel,
    MessageToast
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step24.Step24", {
        onInit: function() {
            var oData = {
                recipient: {
                    name: "hello , SAP UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        navBackHandler: function() {
            this.getOwnerComponent().getRouter().navTo("main");
        },

        onOpenDialog: function(oEvent) {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});