var swiper = new Swiper(".examples__swiper", {
	slidesPerView: 4,
	spaceBetween: 30,
	slidesPerGroup: 1,
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
		350: {
			slidesPerView: 1.4,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		450: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		500: {
			slidesPerView: 2.2,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		600: {
			slidesPerView: 2.4,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		680: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 15,
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