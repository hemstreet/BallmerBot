"use strict";

var app = angular.module('ballmerBot', ['ngRoute', 'btford.socket-io'])
    .factory('socket', function(socketFactory) {
        return socketFactory();
    });

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    }).when('/tap', {
        templateUrl: 'views/tap.html',
        controller: 'TapController'
    }).when('/add', {
        templateUrl: 'views/tap.html',
        controller: 'TapController'
    }).otherwise({
        redirectTo: '/'
    });

}]);