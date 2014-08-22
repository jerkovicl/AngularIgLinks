var AngularIgLinks = angular.module('AngularIgLinks', ['ngRoute']);

AngularIgLinks.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/hypebeast', {
            templateUrl: 'views/hypebeast.html'
        })
        .when('/victorcruz', {
            templateUrl: 'views/teamvic.html'
        })
        .when('/highsnobiety', {
            templateUrl: 'views/highsnobiety.html'
        })
        .otherwise({
            redirectTo: '/hypebeast'
        });
};
configFunction.$inject = ['$routeProvider', '$locationProvider'];

AngularIgLinks.config(configFunction);
