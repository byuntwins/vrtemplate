$(document).ready(function() {

  //mobile nav functionality//
  $('#hamburger,#close').click(function() {
    $('#hamburger, #close').toggle();
    $('.custom-navigation #links').toggleClass('visible', 500);
  });
});
