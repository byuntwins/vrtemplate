$(document).ready(function(){

  // hide our element on page load
  $('#about').css('opacity', 0);

  $('#about').waypoint(function() {
      $('#about').addClass('fadeInDown');
  }, { offset: '80%' });

});
