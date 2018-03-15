var myModule =angular.module('myModule', [])
    .controller('myController', function($scope){

        $scope.title = "Employee";

        var employee = {
            firstname : "Qalfin",
            middlename : "",
            lastname: "turandy"
        };

        $scope.employee = employee;
    });