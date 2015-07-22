(function() {
    var app = angular.module("hawcManual"); 

    var documentController = function($scope, documentService, $routeParams) {

        $scope.documentTitle = $routeParams.documentNavigation;
        $scope.document = documentService.getDocument(); 

    };

    app.controller("DocumentController", documentController); 

}());