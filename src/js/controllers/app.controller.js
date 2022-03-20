angular.module("portifolio").controller("appController", function ($scope, $rootScope, $http, backEndUrl) {

    $rootScope.app = "Hideyoshi Portifolio";

    var createAuthentication = function(username, password) {
        return btoa(username+':'+password).toString();
    }


    var validateSession = function () {
        $http.get(backEndUrl + '/session/validate',
        {withCredentials: true, headers: {
            'Authorization': 'Basic '+ createAuthentication("YoshiUnfriendly", "passwd")}})
        .then(function (response) {
            if (response) {
                console.log(response);
                $rootScope.Client = response.data;
            } else {
                $rootScope.Client = null;
            }
        });
    }

    validateSession();

});