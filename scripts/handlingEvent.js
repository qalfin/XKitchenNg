var handlingModule = angular.module('handlingModule', [])
    .controller('handlingController', function($scope){
        $scope.title="Technologies";

        var technologies=[
            { name : "HTML", likes : 0, dislikes : 0},
            { name : "Ecma Scripts", likes : 0, dislikes : 0},
            { name : "CSS", likes : 0, dislikes : 0},
            { name : "Node JS", likes : 0, dislikes : 0},
            { name : "AngularJS", likes : 0, dislikes : 0}
        ]

        $scope.technologies = technologies;

        $scope.incrementLikes = function(technology){
            technology.likes++;
        }

        $scope.incrementDislikes = function(technology){
            technology.dislikes++;
        }

    })