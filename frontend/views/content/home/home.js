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
            img: 'img/home/About Us.png',
            title: '1st Screen ',
            subtitle: 'Delivering Superior customer experience  while reducing cost',
            link: ''
        },
        {
            img: 'img/home/Big Data Analytics.png',
            title: 'Big Data & Analytics',
            subtitle: ' Unlock the power of data through our efficient<br> Big Data and Analytics solution',
            link: ''

        },
        {
            img: 'img/home/Digital Services.png',
            title: 'Digital Service',
            subtitle: 'Focusing on spectacular solutions for next generation <br> innovative products.',
            link: ''
        },
        {
            img: 'img/home/IRC.png',
            title: 'IRC Screen',
            subtitle: 'How a US customer in Financial security and <br>Fraud prevention domain ',
            link: ''
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