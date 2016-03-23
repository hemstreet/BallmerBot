angular.module('ballmerBot').directive('bottleList', ['drinkService', BottleList]);

function BottleList() {
    return {
        restrict: 'E',
        templateUrl: './lib/directives/bottleList/bottleList.html',
        controller: BottleListController
    }
}

function BottleListController($scope, drinkService) {

    //$scope.bottles = "test";
    drinkService.getBottles().then(function(bottles) {
        $scope.bottles = bottles;
    });
}