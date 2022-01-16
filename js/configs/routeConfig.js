angular.module("portifolio").config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "home"
    });
    $routeProvider.when("/contact", {
        templateUrl: "view/contact.php"
    })
    $routeProvider.otherwise({
        redirectTo: "/home"
    })
});