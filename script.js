$(function() {
	$('.toggles button').click(function() {
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(100);
		get_current.show(100);
	})

	$('#showall').click(function() {
		$('.post').show(100);
	});
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	  items:5,
	  loop:true,
	  freeDrag:true,
	  nav:true
  });
});

