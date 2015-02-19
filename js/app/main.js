/**
 * Created by Ibrahim on 2/15/2015.
 */
var calculator = angular.module("calculator", ["ngAnimate"]);
var calcController = calculator.controller("calc", function ($scope) {
    var cars = [];
    $scope.test = "<a>fuck</a>";
    $scope.cars = cars;
    $scope.selectedcars = [];
    $scope.colors = ["red", "blue"];
    $scope.tableHead = "Table Headers _|_";
    $scope.showAlert = true;
    $scope.lastid = 0;
    $scope.fuck = function (some) {
        some.id = ++$scope.lastid;
        $scope.cars.push(angular.copy(some));
        console.log(some);
        console.log(cars);
    };
    $scope.close = function () {
        $scope.closeAlert();
    };
    $scope.add = function (color) {
        $scope.colors.push(angular.copy(color));
    };
    $scope.closeAlert = function () {
        $scope.showAlert = false;
    };
    $scope.showAlertFunc = function () {
        $scope.showAlert = true;
    };
    $scope.delete = function (id) {
        var index = $scope.cars.indexOf(id);
        $scope.cars.splice(index, 1);
        $scope.lastid--;

    };
    $scope.countSelectedCars = function () {
        var count = 0;
        cars.forEach(function (ary) {
            ary.selected == true ? count++ : false;
        });
        return count;
    };
    $scope.deletecars = function (index) {
        console.log("$scope.selectedcars");
        console.log($scope.selectedcars);
        $scope.selectedcars.forEach(function (value) {
            $scope.cars.splice($scope.cars.indexOf(value), 1);
        });
        $scope.selectedcars = [];
        console.log("$scope.cars");

        console.log($scope.cars);

    };
    $scope.pushtoselectedarraycars = function (car, index) {
        if ($scope.selectedcars.indexOf(car) === -1)
            $scope.selectedcars.push(car);
        else
            $scope.selectedcars.splice($scope.selectedcars.indexOf(car), 1);
        console.log($scope.selectedcars);
    };

});
calcController.directive("mydirective", function () {
    var fuckingdirective =
            {
                template: "<div class='alert'>" +
                        "<span class='alert-topic'>" +
                        "{{what}}" +
                        "</span>" +
                        "<span class='alert-description'>" +
                        "You must inform the plate and the color of the car!" +
                        "</span>" +
                        " <a href=\"\" ng-click=\"close()\">Close</a>" +
                        "</div>",
                replace: true,
                restrict: 'AECM',
                scope: {
                    'what': "@what",
                    'close': "&close"
                }

            };
    return  fuckingdirective;
});
calcController.directive("drag", function ($document) {
    return function (scope, element, attr) {
        var StartX = 0, StartY = 0, x = 0, y = 0;
        element.css({
            position: 'relative',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer',
            display: 'block',
            width: '65px'
        });
        element.on("mousedown", function (event) {
            event.preventDefault();
            StartX = event.screenX - x;
            StartY = event.screenY - y;
            $document.on("mousemove", mousemove);
            $document.on("mouseup", mouseup);
        });
        function mousemove(event) {
            y = event.screenY - StartY;
            x = event.screenX - StartX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
            console.log(event);
        }
        function mouseup() {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }

    };
});

/* Restrict Table
 Attribute (default) A <div alert></div>
 Element name E <alert></alert>
 Class C <div class="alert"></div>
 Comment M <!-- directive:alert -->
 --------------
 @ This prefix passes the data as a string.
 = This prefix creates a bidirectional relationship between a controller's scope
 property and a local scope directive property.
 & This prefix binds the parameter with an expression in the context of
 the parent scope. It is useful if you would like to provide some outside
 functions to the directive.
 */