(function() {
    'use strict';
    angular.module("portfolio").config(function ($httpProvider){
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.withCredentials = true;
    });
})();