myApp.controller('headerCtrl', function ($scope, TemplateService, $state, $timeout) {
    $scope.template = TemplateService;
    $scope.oneAtATime = true;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            // $(".logo").css("width", '12%');
            $(".logo-img").css("width", '40%');
            $(".navbar").css("background", '#4475a7');
         
            $(".scrolltotop").css("display", 'block');

        } else {
            $(".navbar").css("background", 'transparent');
            // $(".logo").css("width", 'auto');
            $(".logo-img").css("width", '60%');
            $(".scrolltotop").css("display", 'none');
         
        }
    });
    $.fancybox.close(true);
    $scope.goToAnchor = function (id) {
        console.log("inside anchor")
        $state.go('home');
        if (id) {
            $timeout(function () {
                $('html,body').animate({
                    scrollTop: $('#' + id).offset().top - 70
                }, "slow");
            }, 500);
        }
    };
    $scope.scrollTop = function () {
        $('html, body').animate({
            scrollTop: $('body,html').offset().top - 100
        }, 3000);
    }


});