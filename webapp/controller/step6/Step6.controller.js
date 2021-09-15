sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
    Controller,
    MessageToast
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step6.Step6", {
        navBackHandler: function() {
            this.getOwnerComponent().getRouter().navTo("main");
        },

        onShowHello: function() {
            MessageToast.show("Hello World")
        }
    });
});