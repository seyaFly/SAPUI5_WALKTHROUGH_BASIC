sap.ui.define([
    "sap/ui/core/mvc/Controller",
], function(
    Controller
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step5.Step5", {
        navBackHandler: function() {
            this.getOwnerComponent().getRouter().navTo("main");
        },

        onShowHello: function() {
            // show a native JavaScript alert
            /* eslint-disable no-alert */
            alert("Hello World");
        }
    });
});