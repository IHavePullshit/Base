/**
 * Created by Ibrahim on 2/15/2015.
 */
var calculator = angular.module("calculator",[]);
var calcController = calculator.controller("calc",function ($scope){
    var cars = [];
    $scope.test = "<a>fuck</a>";
    $scope.cars = cars;
    $scope.colors = ["red","blue"];
    $scope.tableHead = "Table Headers _|_";
    $scope.showAlert = true;
    $scope.fuck = function (some){
        $scope.cars.push(angular.copy(some));
        console.log(some);
        console.log(cars);
    };
    $scope.close = function(){
        $scope.closeAlert();
    };
    $scope.add = function (color){
        $scope.colors.push(angular.copy(color));
    };
    $scope.closeAlert = function(){
        $scope.showAlert = false;
    };
    $scope.showAlertFunc = function (){
        $scope.showAlert = true;
    };

});
calcController.directive("mydirective",function(){
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
        replace : true,
        restrict : 'AECM',
        scope:{
            'what' : "@what",
            'close' : "&close"
        }

    };
    return  fuckingdirective;
});
calcController.directive("accordion",function(){

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