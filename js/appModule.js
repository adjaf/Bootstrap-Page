var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "templates/home.html",
    })
    .when("/hobbies", {
        templateUrl: "templates/hobbies.html",
    })
    .when("/music", {
        templateUrl: "templates/music.html",
    })
    .otherwise("/");
});
