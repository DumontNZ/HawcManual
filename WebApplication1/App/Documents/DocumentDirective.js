(function() {

    var app = angular.module("hawcManual");

    var documentDirective = function() {

        return {
            restrict: 'E',
            templateUrl: 'app/Documents/document.html'
        };

    };

    app.directive("documentDirective", documentDirective); 

}());