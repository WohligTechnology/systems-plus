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
            img: 'img/home/banner/group.jpg',
            title: 'Your Preferred digital transformation partner  ',
            subtitle: 'Delivering superior customer experience while reducing cost',
            link: 'about'
        }
        ,
        {
            img: 'img/home/banner/sp3.jpg',
            title: 'Leverage the power of Big Data and Analytics to Increase your business',
            subtitle: 'Unlock the power of data through our efficient big data and analytics solution',
            link: 'bi-analytics',
            cat: 'service'
        },
        {
            img: 'img/home/banner/sp1.jpg',
            title: 'Streamline your Customer Journey with our Digital Services',
            subtitle: 'Focusing on spectacular solutions for next generation innovative products',
            link: 'digital-service',
            cat: 'service'
        },
        {
            img: 'img/home/banner/sp4.jpg',
            title: 'Expand your team hassle free with our proven and unique custodian model',
            subtitle: 'How a European customer saved 34% of cost through our unique custodian model ',
            link: 'IRC',
            cat: 'service'
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
    $scope.contactSubmit = function (data) {
        console.log("contact data-----------", data);
        $scope.data = null;
    }
})