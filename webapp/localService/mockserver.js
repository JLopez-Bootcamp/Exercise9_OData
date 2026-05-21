sap.ui.define([
  "sap/ui/core/util/MockServer"
], function (MockServer) {
  "use strict";

  return {
    init: function () {

      var oMockServer = new MockServer({
        rootUri: "/V2/Northwind/Northwind.svc/"
      });

      oMockServer.simulate("localService/mainService/metadata.xml", {
        sMockdataBaseUrl: "localService/mockdata",
        bGenerateMissingMockData: false
      });

      oMockServer.start();

      console.log("Mock server is intercepting /V2/Northwind/Northwind.svc/");
    }
  };
});
