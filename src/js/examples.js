var swiper = new Swiper(".examples__swiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	grid: {
	  rows: 2,
	},
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
		680: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		760: {
			slidesPerView: 3.4,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		1010: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: ".examples .arrow_next",
		prevEl: ".examples .arrow_prev",
	},
  });