(function() {

    var app = angular.module("hawcManual");

    var documentService = function($http) {

        var getDocument = function() {
            return {
                title: "Title",
                type: "1",
                content: "Hi my name is what"
            };
        };

        return {
            getDocument: getDocument
        };
    };

    app.factory("documentService", documentService);

}()); 