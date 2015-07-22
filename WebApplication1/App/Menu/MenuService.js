(function() {
    var app = angular.module("hawcManual");

    var menuService = function() {

        var getMenu = function() {

            return {
                menuItems: [
                {
                    id: 1,
                    description: "How to documents",
                    documents: [
                            {
                                id: 1,
                                title: "How to make bacon",
                                navigation: "how-to-make-bacon"
                            },
                            {
                                id: 2,
                                title: "How to make cheese",
                                navigation: "how-to-make-cheese"
                            }]
                },
                {
                    id: 2,
                    description: "How not to do stuff",
                    documents: [
                            {
                                id: 3,
                                title: "Driving badly",
                                navigation: "driving-badly"
                            },
                            {
                                id: 4,
                                title: "Crashing bikes",
                                navigation: "crashing-bikes"
                            }]
                }]
            };
        };

        return {
            getMenu: getMenu
        };
    };

    app.factory("menuService", menuService); 

}
());