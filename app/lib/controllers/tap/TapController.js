"use strict";

angular.module('ballmerBot').controller('TapController', TapController);

function TapController($scope, socket, ballmerService) {

    ballmerService.getInventory().then(function(inventory) {
        $scope.inventory = inventory;
    });

};