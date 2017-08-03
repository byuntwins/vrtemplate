$(document).ready(function() {

//get height of the nav bar
  var nav = $('nav').outerHeight();

  $('.slide-section').click(function(e) {

    var linkHref = $(this).attr('href');

    $('html body').animate({
      scrollTop: $(linkHref).offset().top - nav
    }, 1000);

    e.preventDefault();
  });

});
