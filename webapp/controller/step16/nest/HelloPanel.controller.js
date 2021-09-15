sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function(
    Controller,
    Fragment,
    MessageToast
) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.step16.nest.HelloPanel", {
        onShowHello: function() {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },

        onOpenDialog: function(oEvent) {
            var oView = this.getView();

            if (!this.pDialog) {
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "onem.seya.walkthrough.view.step16.fragments.HelloDialog"
                }).then(function(oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            this.pDialog.then(function(oDialog) {
                oDialog.open();
            });
        }
    });
});