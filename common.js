$(document).ready(function () {

    if ($("html, body").scrollTop() > 20) {
        $("html, body").animate({scrollTop: 0}, 500);
    }

    $('#nav li').click(function () {

        var winHeight = $(window).height();
        var navIndex = $(this).index();
        // navIndex = navIndex + 1;

        $('#container').animate({top: -(winHeight * navIndex)}, 500);
    });
    // 움직임

    var myFullpage = new fullpage('#container', {
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        css3: false,
        slidesNavigation: false,
        loopHorizontal: false,

    });
    // 색상

});