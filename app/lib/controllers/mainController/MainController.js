"use strict";

angular.module('ballmerBot').controller('MainController', ['$scope', 'socket', 'ballmerService', MainController]);

function MainController($scope, socket, ballmerService) {

    $scope.drinks = ballmerService.getAvailableDrinks();

    //ballmerService.getAvailableDrinks().then(function(drinks) {
    //    $scope.drinks = drinks;
    //});

}