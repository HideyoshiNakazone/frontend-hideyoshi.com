(function() {

    'use strict';

    angular.module("portifolio").factory("sessionAPI", function ($window, $http, backEndUrl) {

        var _createAuthentication = function (username, password) {
            return btoa(username + ':' + password).toString();
        }

        var _validateSession = function () {
            return $http.get(backEndUrl + '/session/validate',
                {withCredentials: true, headers: {
                    'Authorization': 'Basic '+ _createAuthentication("YoshiUnfriendly", "passwd")}})
        }

        var _destroySession = function () {
            $window.sessionStorage.clear();
            return $http.get(backEndUrl + '/session/destroy', 
                {withCredentials: true, headers: {
                    'Authorization': 'Basic '+ _createAuthentication("YoshiUnfriendly", "passwd")}})
        };

        return {
            validateSession: _validateSession,
            destroySession: _destroySession
        };
    })

})();