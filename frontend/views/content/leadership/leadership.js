myApp.controller('LeadershipCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal, $stateParams ) {
    $scope.template = TemplateService.getHTML("content/leadership/leadership.html");
    TemplateService.title = "About Us"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();


    $scope.leaderdetail = [
        {
            "id" : 1,
            "img" : "img/leadership/Ramendra_Shukla.jpg",
            "name" : "vivek",
            "desc" : "Systems Plus Transformation provides creative, robust, optimized and agile solutions development under one roof."

        },
        {
            "id" : 2,
            "img" : "img/leadership/Ramendra_Shukla.jpg",
            "name" : "chirag",
            "desc" : "Systems Plus"

        }
    ];

    $scope.leaderdata = _.find($scope.leaderdetail,function(leader){
             return leader.id==$stateParams.id;
    })

});