$(document).ready(function(){

  // hide our element on page load
  $('#impactanimate1').css('opacity', 0);
  $('#impactanimate2').css('opacity', 0);
  $('#impactanimate3').css('opacity', 0);
  $('#impacttitleanimate').css('opacity', 0);
  $('#impactsubtitleanimate').css('opacity', 0);

  $('#impacttitleanimate').waypoint(function() {
      $('#impacttitleanimate').addClass('fadeIn');
      $('#impacttitleanimate').css('opacity', 1);
  }, { offset: '50%' });

  $('#impactsubtitleanimate').waypoint(function() {
      $('#impactsubtitleanimate').addClass('fadeIn');
      $('#impactsubtitleanimate').css('opacity', 1);
  }, { offset: '80%' });

  $('#impactanimate1').waypoint(function() {
      $('#impactanimate1').addClass('zoomIn');
      $('#impactanimate1').css('opacity', 1);
  }, { offset: '80%' });

  $('#impactanimate2').waypoint(function() {
      $('#impactanimate2').addClass('zoomIn');
      $('#impactanimate2').css('opacity', 1);
  }, { offset: '80%' });

  $('#impactanimate3').waypoint(function() {
      $('#impactanimate3').addClass('zoomIn');
      $('#impactanimate3').css('opacity', 1);
  }, { offset: '80%' });

});
