angular.module("portifolio").factory("clientesAPI", function ($http, config) {
    var _getCliente = function (cliente) {
        return  $http.get(config.baseUrl+"/cliente?userid="+cliente.userid)
    };
    return {
        getCliente: _getCliente
    };
});