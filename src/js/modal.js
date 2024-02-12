$('.phone-mask').mask('+7 (999)999-99-99');

$('.time-mask').mask('99:99');

$('.car-1--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#modal-car-1',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.car-2--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#modal-car-2',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.car-3--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#modal-car-3',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.thanks--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#modal-thanks',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.back--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#back-call',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.calculate--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#modal-calculate',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});