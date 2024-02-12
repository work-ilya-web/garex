$('.accordion__top').on("click", function(){
	$(this).parent().toggleClass('active');
	if( $(this).parent().hasClass('active')) {
		$(this).next().slideDown();
	} else {
		$('.accordion__hidden').slideUp();
		$(".accordion").removeClass("active");
	}
});
$(function ($) {
	$(document).on("mouseup", function (e) {
	var div = $(".accordion.active");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass("active");
		}
	});
});
$(function ($) {
	$(document).on("mouseup", function (e) {
		var div = $(".accordion__hidden");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.slideUp();
		}
	});
});