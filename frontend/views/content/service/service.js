myApp.controller('ServiceCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $stateParams) {
    $scope.template = TemplateService.getHTML("content/service/" + $stateParams.serviceId + ".html");
    TemplateService.title = "Solutions"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.openWhitepaper = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/whitepaper.html",
            scope: $scope,
            size: 'md'
        });
    };
    //connect us modal

    $scope.connectppl = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/connectppl.html",
            scope: $scope,
            size: 'md'
        });
    };
    $scope.connectpplsubmit = function (data) {
        console.log("contact data-----------", data);
        NavigationService. ConnectpplSave(data, function (data) {
        });
    }
});