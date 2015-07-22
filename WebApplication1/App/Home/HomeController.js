(function() {
    var app = angular.module("hawcManual");

    var homeController = function($scope, $location) {

        $scope.something = function () {
            $location.path('/document');
        };

    };

    app.controller("HomeController", homeController);

}())