$(function () {
	$('.inview').on('inview', function (event, isInView) {
		if (isInView) {
			$(this).addClass('inviewFade');
		}
	});
});

$(function () {
	//swiper 768以下で起動
	var swiper;
	$(window).on('load resize', function () {
		var w = $(window).width();
		if (w <= 768) {
			if (swiper) {
				return;
			} else {
				swiper = new Swiper('#job .swiper-container', {
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					scrollbar: {
						el: '.swiper-scrollbar',
					},
				});
			}
		} else {
			if (swiper) {
				swiper.destroy();
				swiper = undefined;
			}
		}
	});
});

$(function () {
	$('.owl-carousel').owlCarousel();
});
