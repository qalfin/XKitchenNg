var categoryModule = angular
    .module('categoryModule', [])
    .controller('categoryController', function($scope, $http){
        $scope.title = "List of Categories";

        $scope.categories = [
                {code: "Code 1", name: "Main Course"},
                {code: "Code 2", name: "Main Course"},
                {code: "Code 3", name: "Main Course"},
                {code: "Code 4", name: "Main Course"},
                {code: "Code 5", name: "Main Course"}
        ];
        
    });