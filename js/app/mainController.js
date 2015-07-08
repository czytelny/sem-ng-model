"use strict";

var scope;
angular.module("ModelDemo").controller("mainController",
    ['$scope', 'MainService', function($scope, MainService) {
        scope = $scope;

        $scope.user = {
            login: "mc",
            name: "mic",
            age: 32
        };

        $scope.user2 = {
            login: "mc",
            name: "mic",
            age: 32
        };

        $scope.areTheyEqual = function() {
            if ($scope.user == $scope.user2) {
                console.log("yup");
            }
            console.log("nope");
        }

    }]);