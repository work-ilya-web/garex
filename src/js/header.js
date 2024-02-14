// Main menu open
$('.burger').on("click", function (event) {
	$(this).toggleClass('active');
	$('body').toggleClass('lock');
	$('.header-bottom').toggleClass('active');
});

$('.menu a').on("click", function () {
	$('.burger').removeClass('active');
	$('body').removeClass('lock');
	$('.header-bottom').removeClass('active');
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	return false;
});

function rearrangeBlocks() {
    const header = $('.header');
    const logo = $('.logo');
    const menu = $('.menu');
    const headerRight = $('.header__right');

    if (window.innerWidth <= 1010) {
        if (!header.find(headerRight).length || headerRight.next()[0] !== menu[0]) {
            headerRight.detach().insertAfter(menu);
        }
    } else {
        if (!header.find(headerRight).length || headerRight.next()[0] !== logo[0]) {
            headerRight.detach().insertAfter(logo);
        }
    }
}

// Initial rearrangement on page load
rearrangeBlocks();

// Add event listener for window resize
$(window).on('resize', rearrangeBlocks);
