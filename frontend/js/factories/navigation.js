myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [
                //     {
                //     name: "Subnav1",
                //     classis: "active",
                //     anchor: "home"
                // }
            ]
        },
        {
            name: "About Us",
            classis: "active",
            anchor: "aboutus",
            id: "aboutus",
            subnav: []
        },
        {
            name: "Services",
            classis: "active",
            anchor: "services",
            id: 'service',
            subnav: []
        },
        {
            name: "Products",
            classis: "active",
            anchor: "products",
            id: "product",
            subnav: []
        },
        {
            name: "Insights",
            classis: "active",
            anchor: "insight",
            id: "insight",
            subnav: []
        },
        {
            name: "Sister Companies",
            classis: "active",
            anchor: "partners",
            id: "partners",
            subnav: []
        },
        {
            name: "Contact Us",
            classis: "active",
            anchor: "contact",
            subnav: []
        },
        //  {
        //     name: "Links",
        //     classis: "active",
        //     anchor: "links",
        //     subnav: []
        // }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});