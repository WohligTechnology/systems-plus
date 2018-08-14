myApp.controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/contact/contact.html");
    TemplateService.title = "Contact"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.oneAtATime = true;
    $scope.data = {}
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
   

    $scope.contactSubmit = function (data) {
        console.log("contact data-----------", data);
        // $scope.data = null;
        NavigationService.CareerSave(data, function (data) {
        });
    }
});