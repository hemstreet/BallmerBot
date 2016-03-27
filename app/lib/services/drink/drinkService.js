angular.module('ballmerBot').service('drinkService', ['$http', '$q', function($http, $q) {

    this.getBottles = function() {
        var deferred = $q.defer();
        $http.get('/bottles').then(function(response) {
            deferred.resolve(response.data.message);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

    this.getAvailableDrinks = function() {
        var deferred = $q.defer();
        $http.get('/getAvailableDrinks').then(function(response) {
            deferred.resolve(response.data.message);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

    this.pourDrink = function(drinkName) {
        var deferred = $q.defer();
        $http.get('/pour/' + drinkName).then(function(response) {
            deferred.resolve(response.data.message);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

    this.pour = function(pump, oz) {
        var deferred = $q.defer();
        $http.get('/pour/' + pump + '/' + oz).then(function(response) {
            deferred.resolve(response.data.message);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

}]);