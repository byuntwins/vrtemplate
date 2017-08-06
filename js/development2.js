$(document).ready(function(){

  // hide our element on page load
  $('#imganimate1').css('opacity', 0);
  $('#imganimate2').css('opacity', 0);
  $('#imganimate3').css('opacity', 0);

  $('#imganimate1').waypoint(function() {
      $('#imganimate1').addClass('flipInX');
      $('#imganimate1').css('opacity', 1);
  }, { offset: '65%' });

  $('#imganimate2').waypoint(function() {
      $('#imganimate2').addClass('flipInX');
      $('#imganimate2').css('opacity', 1);
  }, { offset: '65%' });

  $('#imganimate3').waypoint(function() {
      $('#imganimate3').addClass('flipInX');
      $('#imganimate3').css('opacity', 1);
  }, { offset: '65%' });

});
