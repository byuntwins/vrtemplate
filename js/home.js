$(document).ready(function(){

  // hide our element on page load
  $('#titleanimate').css('opacity', 0);

  $('#titleanimate').waypoint(function() {
      $('#titleanimate').addClass('fadeIn');
  }, { offset: '100%' });

  $('#subtitleanimate').css('opacity', 0);

  $('#subtitleanimate').waypoint(function() {
      $('#subtitleanimate').addClass('fadeIn');
  }, { offset: '100%' });

});
