angular.module("portifolio").controller("appController", function ($scope, $rootScope, $http) {

    $rootScope.app = "Hideyoshi Portifolio";

    var validateSession = function () {
        $http.get('/session/validate',{withCredentials: true}).then(function (res) {
            if (res) {
                $rootScope.Client = res.data;
            }
        });
    }

    validateSession();

});