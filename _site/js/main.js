$(function() {

    var header = $("#c-header");

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        var windowSize = $(window).height();

        if (scroll >= windowSize) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }

    });
});
