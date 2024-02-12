var swiper = new Swiper(".tariffs__wrap", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: false,
	loopFillGroupWithBlank: false,
	speed: 1000,
	iOSEdgeSwipeDetection: true,
	breakpoints: {
		220: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 8,
		},
		371: {
			slidesPerView: 1.1,
			slidesPerGroup: 1,
			spaceBetween: 8,
		},
		680: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		760: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
  });