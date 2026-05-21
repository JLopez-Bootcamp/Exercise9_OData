sap.ui.define([
    "sap/ui/core/UIComponent",
    "sapips/training/odata/model/models",
    "sapips/training/odata/localService/mockserver"
], (UIComponent, models, mockserver) => {
    "use strict";

    return UIComponent.extend("sapips.training.odata.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // initialize mock server
            mockserver.init();

            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});