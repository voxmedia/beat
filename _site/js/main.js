// shows nave after landing page is scrolled

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

// color randomizer

$(function() {
  var colors = ["#132ff4", "#F8ABAB", "#D6C028", "#6EB77F", "#BB3736", "#EE8022", "#66469C"];

  document.body.style.setProperty('--color', colors[Math.floor(Math.random()*colors.length)]);
});

// $(function() {
//   var colors = ["#132ff4", "#F8ABAB", "#D6C028", "#6EB77F", "#BB3736", "#EE8022", "#66469C"];

//   document.body.style.setProperty('--color', colors[Math.floor(Math.random()*colors.length)]);
// });

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
