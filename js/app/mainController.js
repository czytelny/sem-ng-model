"use strict";

var scope;
angular.module("ModelDemo").controller("mainController",
    ['$scope', 'MainService', function($scope, MainService) {
        scope = $scope;
        $scope.users = MainService.getUsers();
    }]);

var scope2;
angular.module("ModelDemo").controller("secondController", function($scope) {
    scope2 = $scope;

});