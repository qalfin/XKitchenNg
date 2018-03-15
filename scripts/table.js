var tableModule = angular
    .module('tableModule', [])
    .controller('tableController', function($scope, $http){
        $scope.title ="List of Tables";
        $scope.createNew = true;

        $scope.base_url = "http://localhost:3000/api/tables";


        //tampil
        $http.get($scope.base_url)
            .then(function(response){
                $scope.tables = response.data
            })

        //tambahdata
        $scope.add = function(){
            $http.post($scope.base_url, $scope.table)
                .then(function(data, status){
                    $http.get($scope.base_url)
                    .then(function(response){
                        $scope.tables = response.data;
                        $scope.createNew = true;
                        $scope.table = null;
                    })
                })
            }

        //editdata
        $scope.edit = function(table){
            $http.get($scope.base_url + "/" + table._id)
                .then(function(response){
                    $scope.table = response.data;
                    $scope.createNew = false;
                })
        }

        //updatedtaa
        $scope.update = function(){
            let editData = [
            { 'propName' : 'code' , 'value' : $scope.table.code},
            { 'propName' : 'seat' , 'value' : $scope.table.seat},
            { 'propName': 'description', 'value' : $scope.table.description}
            ];

        $http.patch($scope.base_url + "/" + table._id, editData)
        .then(function(data, status){
            $http.get($scope.base_url)
            .then(function(response){
                $scope.tables = response.data;
                $scope.createNew = true;

        })
            })
        
        }

        //delete
        $scope.delete = function(table){
            $http.delete
        }
    
    })