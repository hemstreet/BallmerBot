angular.module('ballmerBot').directive('drinkList', ['drinkService', DrinkList]);

function DrinkList() {
    return {
        restrict: 'E',
        templateUrl: './lib/directives/drinkList/drinkList.html',
        controller: DrinkListController
    }
}

function DrinkListController($scope, drinkService) {

    drinkService.getAvailableDrinks().then(function(drinks) {
        $scope.drinks = drinks;
    });

    drinkService.getBottles().then(function(bottles) {
        $scope.pourDrink = function(drink) {
            var json = JSON.parse(drink.proportions);

            console.log('pouring', drink.name);

            angular.forEach(json, function(oz, bottleName) {
                angular.forEach(bottles, function(value, key) {
                    if(value.name.toLowerCase() == bottleName.toLowerCase()) {
                        console.log('Pouring', bottleName, oz + ' oz');
                        drinkService.pour(value.pump, oz);
                    }
                });
            });

        }
    });

}