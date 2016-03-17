"use strict";

angular.module('ballmerBot').service('ballmerService', ['$q', 'socket', BallmerService]);

function BallmerService($q, socket) {
    this.getInventory = function () {
        var deferred = $q.defer();

        socket.emit('DRINK:WillGetInventory', []);

        socket.on('DRINK:DidGetInventory', function(inventory) {
            deferred.resolve(inventory);
        });

        return deferred.promise;
    };

    this.pour = function (data) {
        socket.emit('DRINK:WillPourDrink', data);
    };

    this.getAvailableDrinks = function() {
        socket.emit('DRINK:WillGetAvailableDrinks');
    }

}