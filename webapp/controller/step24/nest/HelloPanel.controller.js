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

    return Controller.extend("onem.seya.walkthrough.controller.step24.nest.HelloPanel", {
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
                    name: "onem.seya.walkthrough.view.step24.fragments.HelloDialog",
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
            // note: We don't need to chain to the pDialog promise, since this event-handler
            // is only called from within the loaded dialog itself.
            this.byId("helloDialog").close();
        }
    });
});