
(function () {
    var app = angular.module("hawcManual");
 
    var menuController = function ($scope, $location, menuService) {

        $scope.menu = menuService.getMenu().menuItems;

        $scope.goToDocument= function (documentNavigation) {
            //navigates to the below path
            $location.path("#/document/" + documentNavigation);
        };
    };
    
    app.controller("MenuController", menuController);

}());
