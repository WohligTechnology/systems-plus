myApp.controller('CareersCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/careers/careers.html");
    TemplateService.title = "Careers"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.showdata = 'ba';

    //tab
    $scope.changetab = function(data){
      $scope.showdata = data;
           }
    
    $scope.career = [
        {
            para1 : "Systems Plus provides freedom at work & the opportunity to develop along with the organization. The work environment is filled with challenging and motivating projects and assignments to provide an evolving ecosystem in which individuals are able to realise their professional and personal aspirations."
        },
        {
            para1 : "We are always looking for people with talent, interest and the drive to excel. We invite you to be part of adiverse team of thinkers and doers and this is your chance to take your career to the next level."
        },
     
        {
            para1 : "We are always looking for people with talent, interest and the drive to excel. We invite you to be part of a diverse team of thinkers and doers and this is your chance to take your career to the next level."
        }
    ]
 
    //apply now modal

    $scope.applymodal = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/applynow.html",
            scope: $scope,
            size: 'md'
        });
    };
   
});