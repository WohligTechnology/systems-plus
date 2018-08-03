myApp.controller('CareersCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/careers/careers.html");
    TemplateService.title = "Contact"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.showdata = 'ba';
    $scope.changetab = function(data){
        console.log("$$$$$$$$$$$",data)
        $scope.showdata = data;

    }
    
 
   
});