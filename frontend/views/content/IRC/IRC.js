myApp.controller('IRCCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/IRC/IRC.html");
    TemplateService.title = "IRC"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.openWhitepaper = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/whitepaper.html",
            scope: $scope,
            size: 'md'
        });
    };
});