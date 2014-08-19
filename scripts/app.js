var AngularIgLinks = angular.module('AngularIgLinks', ['ngRoute']);

AngularIgLinks.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider,$locationProvider) {
    'use strict';
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
            redirectTo: '/'
        });
}
configFunction.$inject = ['$routeProvider', '$locationProvider'];

AngularIgLinks.config(configFunction);
