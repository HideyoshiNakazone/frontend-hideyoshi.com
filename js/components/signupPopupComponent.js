class signupPopupController {
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
            
        $scope.createClient = function (client) {
            $http.post("/user/create", client).then(function (response) {

                $scope.loginClient(client);

                $ctrl.handleDismiss();
                $scope.openClientResult();

            }, function (error) {

                $scope.clientStatus = error.data;
                $ctrl.handleDismiss();
                $scope.openClientResult();

            });
        };

        $scope.openClientResult = function (status) {
            $uibModal.open({
                component: "clienteResult",
                status: status
            }).result.then(function (result) {
                
            }, function (reason) {
                
            });
        };
    }
}

angular.module('portifolio').component("signupPopup", {
    templateUrl: "view/src/signupPopup.html",
    bindings: {
        modalInstance: "<",
        resolve: "<"
    },
    controller: signupPopupController
});