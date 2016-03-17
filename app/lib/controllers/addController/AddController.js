"use strict";

angular.module('ballmerBot').controller('CreateController', ['$scope', 'socket', 'ballmerService', MainController]);

function MainController($scope, socket, ballmerService) {

    $scope.create = function(name) {
        console.log('creating drink');
    };

}