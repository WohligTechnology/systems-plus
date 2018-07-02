var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
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
            desc: 'glyphicon-ok-circle'
        },
        {
            img: 'img/home/Big Data Analytics.png',
            desc: 'glyphicon-ok-circle'
        },
        {
            img: 'img/home/Digital Services.png',
            desc: 'glyphicon-ok-circle'
        },
        {
            img: 'img/home/IRC.png',
            desc: 'glyphicon-ok-circle'
        }
    ];
    $timeout(function () {
        mySwiper = new Swiper('.swiper-container', {})
    }, 500);
})