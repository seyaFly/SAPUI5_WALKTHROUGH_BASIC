/* global QUnit */
/**
 * <!-- setp28 qunitTest -->
 */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
    "use strict";

    sap.ui.require([
        "onem/seya/walkthrough/test/unit/model/formatter"
    ], function() {
        QUnit.start();
    });
})