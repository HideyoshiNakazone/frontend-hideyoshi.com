class loginPopupController {
    constructor($scope, $rootScope, $http, $uibModal) {

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
            $http.post("/user/validate", client, { withCredentials: true }).then(function (response) {

                withCredentials: true

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