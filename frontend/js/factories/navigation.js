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
            anchor: "Aboutus",
            subnav: []
        },
        {
            name: "Services",
            classis: "active",
            anchor: "IRC",
            subnav: []
        },
        {
            name: "Products",
            classis: "active",
            anchor: "products",
            subnav: []
        },
        {
            name: "Partners",
            classis: "active",
            anchor: "partners",
            subnav: []
        },
        {
            name: "Insights",
            classis: "active",
            anchor: "insights",
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