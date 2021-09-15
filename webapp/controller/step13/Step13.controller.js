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

    return Controller.extend("onem.seya.walkthrough.controller.step13.Step13", {
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

        onShowHello: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        }
    });
});