angular.module('ballmerBot').service('drinkService', ['$http', '$q', function($http, $q) {

    var baseUrl = "http://localhost:3000/api/v1";
    var options = {
        headers: {
            'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6InNoYTEkMDY4YmJmYjckMSRiODJjYjBhMTBlYjQ2NTQ4YTBlYjM0ZThjYTc3ZGMwZDJkNzIzODk3IiwiYWRtaW4iOnRydWUsInVzZXJuYW1lIjoiYWRtaW4iLCJfaWQiOiI1NmY3MWNhNWRkYjI3ZGM0ODgwMDAwMDEiLCJfX3YiOjB9.78u-x9WFol9jik_g-HrVF8ocUhYGlGByzYEC_V5N5Lw'
        }
    };

    this.getBottles = function() {
        var deferred = $q.defer();
        $http.get(baseUrl + '/list/Bottle', options).then(function(response) {
            deferred.resolve(response.data.entries);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

    this.getAvailableDrinks = function() {

        var deferred = $q.defer();
        this.getDrinks().then(function(response) {
            deferred.resolve(response.data.entries);
        }).fail(function(err) {
            console.log(err);
            this.getDrinks(deferred);
        }.bind(this));

        return deferred.promise;
    };

    this.getDrinks = function(deferred) {

        $http.get(baseUrl + '/list/Drink', options).then(function(response) {
            deferred.resolve(response.data.entries);
        }, function(err) {
            console.log(err);
            // Recursive loop drinks until we get a success
            this.getDrinks(deferred);
        }.bind(this));

    };

    this.pourDrink = function(name) {
        var deferred = $q.defer();
        $http.get('/pour/' + drinkName).then(function(response) {
            deferred.resolve(response.data.entries);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

    this.pour = function(pump, oz) {
        var deferred = $q.defer();
        $http.get('/pour/' + pump + '/' + oz).then(function(response) {
            deferred.resolve(true);
        }, function() {
            deferred.reject(response.error);
        });

        return deferred.promise;
    };

}]);