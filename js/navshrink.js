$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 50) {
    	$('.custom-navigation').addClass('shrink');
    }
    else {
    $('.custom-navigation').removeClass('shrink');
    }
  });
});
