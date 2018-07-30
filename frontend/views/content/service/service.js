myApp.controller('ServiceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $stateParams) {
    $scope.template = TemplateService.getHTML("content/service/" + $stateParams.serviceId + ".html");
    TemplateService.title = "Services"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.openWhitepaper = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/whitepaper.html",
            scope: $scope,
            size: 'md'
        });
    };
    $scope.contactSubmit = function (data) {
        console.log("contact data-----------", data);
        $scope.data = null;
    }
});