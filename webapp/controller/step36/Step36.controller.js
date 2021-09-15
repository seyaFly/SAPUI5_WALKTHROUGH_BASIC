sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/Device"
], function(
    Controller,
    JSONModel,
    MessageToast,
    Device
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step36.Step36", {
        onInit: function() {
            var oData = {
                recipient: {
                    name: "hello , SAP UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.getView().setModel(oDeviceModel, "device");

        },

        navBackHandler: function() {
            this.getOwnerComponent().getRouter().navTo("main");
        },

        onOpenDialog: function(oEvent) {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});