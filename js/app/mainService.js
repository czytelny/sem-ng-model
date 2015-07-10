"use strict";

angular.module("ModelDemo").factory("MainService", function ($http) {
    var dictionaries = {
        jobsList: []
    };

    var badUsers = [];
    var users = {
        usersLists: []
    };

    //some dictionary data on init
    $http.get("data/jobs.json").then(function(response) {
        dictionaries.jobsList = response.data.jobs;
    });

    var getUsers = function() {
        $http.get("data/users.json").then(function(response) {
            users.usersLists = response.data.users;
        });
        return users;
    };

    var getJobs = function() {
        return dictionaries.jobsList;
    };


    return {
        getUsers: getUsers,
        getJobs: getJobs
    }
});