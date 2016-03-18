"use strict";

angular.module('ballmerBot').controller('MainController', ['$scope', 'socket', 'ballmerService', MainController]);

function MainController($scope, socket, ballmerService) {

    ballmerService.getAvailableDrinks().then(function(drinks) {
        $scope.drinks = drinks;
    });

    //ballmerService.getAvailableDrinks().then(function(drinks) {
    //    $scope.drinks = drinks;
    //});

}