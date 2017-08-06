$(document).ready(function(){

  // hide our element on page load
  $('#teamtitle').css('opacity', 0);
  $('#junanimate').css('opacity', 0);
  $('#jinanimate').css('opacity', 0);

  $('#teamtitle').waypoint(function() {
      $('#teamtitle').addClass('fadeIn');
  }, { offset: '60%' });

  $('#junanimate').waypoint(function() {
      $('#junanimate').addClass('slideInLeft');
      $('#junanimate').css('opacity', 1);
  }, { offset: '50%' });

  $('#jinanimate').waypoint(function() {
      $('#jinanimate').addClass('slideInRight');
      $('#jinanimate').css('opacity', 1);
  }, { offset: '50%' });

});
