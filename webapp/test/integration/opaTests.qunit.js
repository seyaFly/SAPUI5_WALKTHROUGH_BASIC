/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
    "use strict";

    sap.ui.require([
        "onem/seya/walkthrough/test/integration/NavigationJourney"
    ], function() {
        QUnit.start();
    });
});