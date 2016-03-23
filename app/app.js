var app = angular.module('ballmerBot', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'vm'
    }).otherwise({
        redirectTo: '/'
    });

}]);