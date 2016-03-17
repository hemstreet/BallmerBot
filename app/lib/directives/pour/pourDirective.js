"use strict";

angular.module('ballmerBot').directive('pour', ['ballmerService', PourDirective]);

function PourDirective() {
    return {
        restrict: 'E',
        templateUrl: './lib/directives/pour/pourDirective.html',
        controller: PourController,
        scope: {

            "pump": "=ngPump",
            "bottle": "=ngBottle",
            "oz" : "=ngOz"
        }
    }
}

// Directive's controller
function PourController($scope, ballmerService) {

    $scope.pour = function(data) {
        ballmerService.pour(data);
    };
}
