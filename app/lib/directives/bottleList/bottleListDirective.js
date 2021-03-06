angular.module('ballmerBot').directive('bottleList', ['drinkService', BottleList]);

function BottleList() {
    return {
        restrict: 'E',
        templateUrl: './lib/directives/bottleList/bottleList.html',
        controller: BottleListController
    }
}

function BottleListController($scope, drinkService) {

    drinkService.getBottles().then(function(bottles) {
        $scope.bottles = bottles;
    });

    $scope.pour = function(pump, oz) {
        drinkService.pour(pump, oz);
    };
}