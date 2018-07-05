myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".logo").css("width", '12%');
            $(".logo-img").css("width", '100%');
            $(".navbar").css("background", '#4475a7');

        } else {
            $(".navbar").css("background", 'transparent');
            $(".logo").css("width", 'auto');
            $(".logo-img").css("width", 'auto');
        }
    });
    $.fancybox.close(true);
});