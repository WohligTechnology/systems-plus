myApp.controller('InsightsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/insights/insights.html");
    TemplateService.title = "Insights"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.insights = [{
            img: "img/home/wallpaper1.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper2.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper3.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper4.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper1.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        }, {
            img: "img/home/wallpaper1.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper2.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper3.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper4.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper1.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        }, {
            img: "img/home/wallpaper1.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper2.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper3.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper4.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
        {
            img: "img/home/wallpaper1.jpg",
            desc: 'Run the Business’ and ‘Change the Business’ at will, without compromising on the quality of service delivery',
            link: '',
        },
    ];
    $scope.openWhitepaper = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/whitepaper.html",
            scope: $scope,
            size: 'md'
        });
    };
});