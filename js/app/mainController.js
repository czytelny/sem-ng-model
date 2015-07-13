"use strict";

var scope;
angular.module("ModelDemo").controller("mainController",
    ['$scope', 'MainService', function($scope, MainService) {
        scope = $scope;
        $scope.users = MainService.getUsers();
        $scope.userEntity = MainService.getUser();

        $scope.saveUser = function() {
            MainService.saveUser();
        }
    }]);

var scope2;
angular.module("ModelDemo").controller("secondController", function($scope, MainService) {
    scope2 = $scope;
    $scope.usersInSecond = MainService.getUser();

});