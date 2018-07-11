myApp.controller('IRCCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/IRC/IRC.html");
    TemplateService.title = "IRC"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

});