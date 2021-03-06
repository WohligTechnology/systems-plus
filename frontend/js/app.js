// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('insights', {
            url: "/insights",
            templateUrl: tempateURL,
            controller: 'InsightsCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: tempateURL,
            controller: 'AboutCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: tempateURL,
            controller: 'ContactCtrl'
        })
        .state('solutions', {
            url: "/solutions/:serviceId",
            templateUrl: tempateURL,
            controller: 'ServiceCtrl'
        })
        .state('product', {
            url: "/product/:type",
            templateUrl: tempateURL,
            controller: 'ProductCtrl'
        })
        .state('careers', {
            url: "/careers",
            templateUrl: tempateURL,
            controller: 'CareersCtrl'
        })
        .state('links', {
            url: "/links",
            templateUrl: tempateURL,
            controller: 'LinksCtrl'
        })
        .state('privacy', {
            url: "/privacy",
            templateUrl: tempateURL,
            controller: 'PrivacyCtrl'
        })
        .state('leadership', {
            url: "/leadership/:id",
            templateUrl: tempateURL,
            controller: 'LeadershipCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
