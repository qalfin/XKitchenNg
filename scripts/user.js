var userModule = angular
    .module('userModule', [])
    .controller('userController', function($scope, $http){
        $scope.title = "List of User";
        $scope.createNew = true;

        $scope.base_url = "http://localhost:3000/api/users";

        //tampil
        $http.get($scope.base_url)
            .then(function(response){
                $scope.users = response.data;
        })
        //tambah data
        $scope.add = function(){
            $http.post($scope.base_url, $scope.user)
                .then(function(data, status){
                    $http.get($scope.base_url)
                    .then (function(response){
                        $scope.users = response.data;
                        $scope.createNew = true;
                        $scope.user = null;
                    })
                })
        }

        //edit
        $scope.edit=function(user){
            $http.get($scope.base_url + "/" + user._id)
                .then(function(response){
                    $scope.user = response.data;
                    $scope.createNew = false;
                })
        }

        //update
        $scope.update = function(){
            let editData = [
                { 'propName' : 'userId', 'value' : $scope.user.userId},
                { 'propName' : 'password', 'value' : $scope.user.password},
                { 'propName' : 'badgeId', 'value' : $scope.user.badgeId},
                { 'propName' : 'nick', 'value' : $scope.user.nick},
                { 'propName' : 'fullName', 'value' : $scope.user.fullName}
            ];

            $http.patch($scope.base_url + "/" + $scope.user._id, editData)
                .then(function(data, status){
                    $http.get($scope.base_url)
                    .then(function(response){
                        $scope.users = response.data;
                        $scope.createNew = true;
                        $scope.user = null;

                    })
                })
        }

        //delete
        $scope.delete = function(user){
            $http.delete($scope.base_url + "/" + user._id)
            .then(function(data, status){
                $http.get($scope.base_url)
                .then(function(response){
                    $scope.users = response.data;
                    $scope.createNew = true;
                    $scope.user = null;
                });
            });
        }
    });