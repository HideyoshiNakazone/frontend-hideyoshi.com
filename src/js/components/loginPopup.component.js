class loginPopupController {
    constructor($scope, $window, $rootScope, $http, $uibModal, clientAPI, sessionAPI) {

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

        $scope.loginClient = function (client) {

            clientAPI.validadeClient(client)
                .then(function (response) {

                    $rootScope.Client = response.data;
                    $rootScope.clientStatus = 0;

                    $ctrl.handleDismiss();
                    $scope.openClientResult();

                }, function (error) {

                    $rootScope.clientStatus = error.data;
                    $ctrl.handleDismiss();
                    $scope.openClientResult();

                });
        };

        $scope.openClientResult = function (clientStatus) {
            $uibModal.open({
                component: "clienteResult"
            });
        };
    }
}

angular.module('portifolio').component("loginPopup", {
    templateUrl: "view/src/loginPopup.html",
    bindings: {
        modalInstance: "<",
        resolve: "<"
    },
    controller: loginPopupController
});