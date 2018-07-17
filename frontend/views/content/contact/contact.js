myApp.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/contact/contact.html");
    TemplateService.title = "Contact"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

});