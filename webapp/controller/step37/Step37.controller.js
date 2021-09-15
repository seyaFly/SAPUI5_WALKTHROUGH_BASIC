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

    return Controller.extend("onem.seya.walkthrough.controller.step37.Step37", {
        onInit: function() {
            var oData = {
                recipient: {
                    name: "hello , SAP UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },

        navBackHandler: function() {
            this.getOwnerComponent().getRouter().navTo("main");
        },

        onOpenDialog: function(oEvent) {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});