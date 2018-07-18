myApp.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $stateParams) {
    $scope.template = TemplateService.getHTML("content/product/product.html");
    TemplateService.title = "Product"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.typeName = $stateParams.type;
    if ($scope.typeName == '') {
        $scope.typeName = 'isee'
    }

    console.log("inside product", $stateParams.type)
});