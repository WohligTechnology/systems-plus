myApp.factory('NavigationService', function ($http) {
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
            name: "About",
            classis: "active",
            anchor: "aboutus",
            id: "aboutus",
            subnav: []
        },
        {
            name: "Solutions",
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
            name: "Careers",
            classis: "active",
            anchor: "careers",
            id: "Careers",
            subnav: []
        },
        {
            name: "Contact",
            classis: "active",
            anchor: "contact",
            id: "contact",
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
        CareerSave: function (formData, callback) {
            $http.post(adminurl + 'Career/save', formData).then(function (data) {
                callback(data);
            });
        }
    };
});