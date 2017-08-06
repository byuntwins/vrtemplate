$(document).ready(function(){

  // hide our element on page load
  $('#processanimate1').css('opacity', 0);
  $('#processanimate2').css('opacity', 0);
  $('#processanimate3').css('opacity', 0);
  $('#processtitleanimate').css('opacity', 0);

  $('#processtitleanimate').waypoint(function() {
      $('#processtitleanimate').addClass('fadeIn');
      $('#processtitleanimate').css('opacity', 1);
  }, { offset: '50%' });

  $('#processanimate1').waypoint(function() {
      $('#processanimate1').addClass('zoomIn');
      $('#processanimate1').css('opacity', 1);
  }, { offset: '80%' });

  $('#processanimate2').waypoint(function() {
      $('#processanimate2').addClass('zoomIn');
      $('#processanimate2').css('opacity', 1);
  }, { offset: '80%' });

  $('#processanimate3').waypoint(function() {
      $('#processanimate3').addClass('zoomIn');
      $('#processanimate3').css('opacity', 1);
  }, { offset: '80%' });

});
