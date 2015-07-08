"use strict";

angular.module("ModelDemo").controller("mainController",
    ['$scope', 'MainService', function($scope, MainService) {

        $scope.userName = "MC";

    }]);