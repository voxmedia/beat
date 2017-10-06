---
---

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

$(function() {
    var classes = ["blue", "pink", "gold", "green", "red", "orange", "purple"];

    $('body').addClass(classes[~~(Math.random()*classes.length)]);
});
