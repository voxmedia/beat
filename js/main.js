---
---

// shows nav after landing page is scrolled

// $(function() {

//     var $header = $("#c-header");

//     $(window).scroll(function() {

//         var scroll = $(window).scrollTop();
//         var windowSize = $(window).height();

//         if (scroll >= windowSize) {
//             $header.addClass("active");
//         } else {
//             $header.removeClass("active");
//         }

//     });
// });

// color randomizer

$(function() {
    var classes = ["blue", "pink", "gold", "green", "red", "orange", "purple"];

    $('body').addClass(classes[~~(Math.random()*classes.length)]);
});

// smooth scroll

$(function() {
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

// toggles participents

$('#logistics').click(function () {
  $(this).addClass("active");
  $('#participant').removeClass("active");
  $('#part').removeClass("active");
  $('#section').addClass("active");
  $('#log').addClass("active");
});

$('#participant').click(function () {
  $(this).addClass("active");
  $('#logistics').removeClass("active");
  $('#log').removeClass("active");
  $('#section').addClass("active");
  $('#part').addClass("active");
});
