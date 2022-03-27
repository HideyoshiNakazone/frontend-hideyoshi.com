(function() {
    'use strict';
    angular.module("portifolio").factory("clientAPI", function ($http, backEndUrl) {

        var _createAuthentication = function (username, password) {
            return btoa(username + ':' + password).toString();
        }
    
        var _validadeClient = function (client) {
            return $http.get(backEndUrl + "/client/validate",
            { 
                withCredentials: true, headers: { 
                    'Authorization': 'Basic ' + _createAuthentication(client.username, client.password) 
                } 
            })
        };
    
        var _createClient = function (client) {
            return $http.post(backEndUrl + '/client/admin/create', client,
            {
                withCredentials: true, headers: {
                    'Authorization': 'Basic ' + _createAuthentication("YoshiUnfriendly", "passwd")
                }
            })
        }
    
        return {
            validadeClient: _validadeClient,
            creaerClient: _createClient
        };
    });
})();