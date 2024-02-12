var swiper = new Swiper(".reviews__swiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: false,
	loopFillGroupWithBlank: false,
	speed: 1000,
	iOSEdgeSwipeDetection: true,
	breakpoints: {
		220: {
			slidesPerView: 1.1,
			slidesPerGroup: 1,
			spaceBetween: 8,
		},
		759: {
			slidesPerView: 2.1,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		1010: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: ".reviews .arrow_next",
		prevEl: ".reviews .arrow_prev",
	},
  });