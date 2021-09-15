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

    return Controller.extend("onem.seya.walkthrough.controller.step34.nest.HelloPanel", {
        onShowHello: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },

        onOpenDialog: function(oEvent) {
            var oView = this.getView();

            if (!this.pDialog) {
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "onem.seya.walkthrough.view.step34.fragments.HelloDialog",
                    controller: this
                }).then(function(oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            this.pDialog.then(function(oDialog) {
                oDialog.open();
            });
        },
        onCloseDialog: function() {

            this.byId("helloDialog").close();
        }
    });
});