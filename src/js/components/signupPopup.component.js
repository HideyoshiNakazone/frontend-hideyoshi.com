class signupPopupController {
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

        var createAuthentication = function(username, password) {
            return btoa(username+':'+password).toString();
        }

        $scope.loginClient = function (client) {
            $http.get(backEndUrl + "/client/validate", 
            {withCredentials: true, headers: {'Authorization': 'Basic '+ createAuthentication(client.username, client.password)}})
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
            
        $scope.createClient = function (client) {

            $http.post(backEndUrl + "/client/admin/create", client, 
            {withCredentials: true, headers: {'Authorization': 'Basic '+ createAuthentication("YoshiUnfriendly", "passwd")}})
            .then(function (response) {

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