sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(
    Controller,
    MessageToast,
    JSONModel
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step7.Step7", {

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
            // show a native JavaScript alert
            /* eslint-disable no-alert */
            MessageToast.show("Hello World")
        }
    });
});