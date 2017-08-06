$(document).ready(function(){

  // hide our element on page load
  $('#development').css('opacity', 0);

  $('#development').waypoint(function() {
      $('#development').addClass('fadeIn');
  }, { offset: '50%' });

});
