sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strict";

    return Controller.extend("onem.seya.walkthrough.controller.Main", {

        /**
         * @public
         * @param iStepId , walkthrough step Id
         */
        navToSteps: function(iStepId) {
            var sNavStep = "step" + iStepId.toString();


            if (iStepId === 27) {
                //setp 27 mocker server configuration
                window.open("test/mockServer.html");
            } else if (iStepId === 28) {
                //Step 28 Qunit Test
                window.open("test/unit/unitTests.qunit.html");

            }

            this.getOwnerComponent().getRouter().navTo(sNavStep)
        }
    });
});