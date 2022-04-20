(function () {

    'use strict';

    angular.module("portifolio").controller("appController", function ($rootScope, sessionAPI) {

        $rootScope.app = "Hideyoshi Portifolio";
    
        (function () {
            sessionAPI.validateSession()
            .then(function (response) {
                if (response) {
                    console.log(response);
                    $rootScope.Client = response.data;
                } else {
                    $rootScope.Client = null;
                }
            });
        })();
    
    });

})();