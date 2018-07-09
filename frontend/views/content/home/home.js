var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.submitForm = function (data) {
        console.log("This is it");
        return new Promise(function (callback) {
            $timeout(function () {
                callback();
            }, 5000);
        });
    };

    $scope.openWhitepaper = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/whitepaper.html",
            scope: $scope,
            size: 'md'
        });
    }
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [{
            stateOn: 'glyphicon-ok-sign',
            stateOff: 'glyphicon-ok-circle'
        },
        {
            stateOn: 'glyphicon-star',
            stateOff: 'glyphicon-star-empty'
        },
        {
            stateOn: 'glyphicon-heart',
            stateOff: 'glyphicon-ban-circle'
        },
        {
            stateOn: 'glyphicon-heart'
        },
        {
            stateOff: 'glyphicon-off'
        }
    ];
    $scope.homeSwiper = [{
            img: 'img/home/About Us.png',
            desc: '“We are a global boutique Information Technology Solution and Services Provider with technology disruptive technology solutions.”',
        },
        {
            img: 'img/home/Big Data Analytics.png',
            desc: '“Leverage the power of Big Data and Analytics to Improve/Increase your business”',
        },
        {
            img: 'img/home/Digital Services.png',
            desc: '“Streamline your Customer Journey with our Digital Services “',
        },
        {
            img: 'img/home/IRC.png',
            desc: '“Expand your team hassle free with our proven and unique custodian model”',
        }
    ];
    $timeout(function () {
        mySwiper = new Swiper('.swiper-container', {
            // AutoPlay
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // Loop
            loop: true,
        })
    }, 1000);
})