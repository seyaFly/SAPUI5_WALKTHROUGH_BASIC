sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "onem/seya/walkthrough/model/models",
        "onem/seya/walkthrough/controller/step19/reuse/HelloDialog"
    ],
    function(UIComponent, Device, models, HelloDialog) {
        "use strict";

        return UIComponent.extend("onem.seya.walkthrough.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function() {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //setp 19
                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            /**
             * setp19  resuse
             */
            exit: function() {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            /**
             * setp19 resue
             */
            openHelloDialog: function() {
                this._helloDialog.open();
            },

            /**
             * setp37 resue
             */
            getContentDensityClass: function() {
                if (!this._sContentDensityClass) {
                    if (!Device.support.touch) {
                        this._sContentDensityClass = "sapUiSizeCompact";
                    } else {
                        this._sContentDensityClass = "sapUiSizeCozy";
                    }
                }
                return this._sContentDensityClass;
            }
        });
    }
);