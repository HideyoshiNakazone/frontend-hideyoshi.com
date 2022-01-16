angular.module("portifolio").factory("usersAPI", function ($http, config) {
    var _getUser = function (user) {
        return  $http.get(config.baseUrl+"/cliente?userid="+user.userid)
    };
    return {
        getUser: _getUser
    };
});