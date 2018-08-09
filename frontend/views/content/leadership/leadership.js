myApp.controller('LeadershipCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/leadership/leadership.html");
    TemplateService.title = "About Us"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
 


    
});