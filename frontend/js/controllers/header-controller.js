myApp.controller('headerCtrl', function ($scope, TemplateService, $state, $timeout) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            // $(".logo").css("width", '12%');
            $(".logo-img").css("width", '40%');
            $(".navbar").css("background", '#4475a7');

        } else {
            $(".navbar").css("background", 'transparent');
            // $(".logo").css("width", 'auto');
            $(".logo-img").css("width", '60%');
        }
    });
    $.fancybox.close(true);
    $scope.goToAnchor = function (anchor, id) {
        console.log("inside anchor")
        $state.go(anchor)
        if (id) {
            $timeout(function () {
                $('html,body').animate({
                    scrollTop: $('#' + id).offset().top - 50
                }, "slow");
            }, 500);
        }
    };
});