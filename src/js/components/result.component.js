class clientResultController {
    constructor($scope, $rootScope, status) {
        
        var $ctrl = this;

        $ctrl.$onInit = function () {
            $ctrl.modalData = $ctrl.resolve.modalData;
        };
        $ctrl.handleClose = function () {
            $ctrl.modalInstance.close($ctrl.modalData);
        };
        $ctrl.handleDismiss = function () {
            $ctrl.modalInstance.dismiss("cancel");
        };
    }
}

angular.module('portifolio').component("clienteResult", {
    templateUrl: "view/src/userResult.html",
    bindings: {
        modalInstance: "<",
        resolve: "<"
    },
    controller: [clientResultController]
});