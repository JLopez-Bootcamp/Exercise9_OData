sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], function (Controller, Sorter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {
        onInit: function () {
            var oTable = this.byId("tabProduct");
            var oBinding = oTable.getBinding("items");

        }
    });
});