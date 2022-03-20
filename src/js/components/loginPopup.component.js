class loginPopupController {
    constructor($scope, $rootScope, $http, $uibModal, backEndUrl) {

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

        var createAuthentication = function (username, password) {
            return btoa(username + ':' + password).toString();
        }

        $scope.loginClient = function (client) {

            $http.get(backEndUrl + "/client/validate",
                { withCredentials: true, headers: { 'Authorization': 'Basic ' + createAuthentication(client.username, client.password) } })
                .then(function (response) {

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