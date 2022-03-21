// voice swiper-slide
$(function () {
	var swipervoice = new Swiper('.voice-container', {
		loop: true,
		slidesPerView: 1.5,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		centeredSlides: true,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 16,
			},
		},
	});
});

// job swiper-slide
var scaleWindowW = function () {
	var w = window.innerWidth || document.documentElement.clientWidth || 0;
	return w;
};
window.addEventListener(
	'DOMContentLoaded',
	function () {
		var swiperjob = undefined;
		var swiperEl = document.querySelector('.job-container');
		var swiperWrapper = document.getElementsByClassName('swiper-wrapper');
		var swiperSlide = document.getElementsByClassName('swiper-slide');
		var initSwiper = function () {
			if (scaleWindowW() < 767 && swiperjob == undefined) {
				swiperjob = new Swiper(swiperEl, {
					loop: false,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					slidesPerView: 'auto',
					centeredSlides: true,
					spaceBetween: 16,
				});
			} else if (scaleWindowW() >= 767 && swiperjob != undefined) {
				swiperjob.destroy();
				swiperjob = undefined;
				for (var i = 0; i < swiperWrapper.length; i++) {
					swiperWrapper[i].removeAttribute('style');
				}
				for (var i = 0; i < swiperSlide.length; i++) {
					swiperSlide[i].removeAttribute('style');
				}
			}
		};
		initSwiper();
		window.addEventListener('resize', initSwiper);
	},
	false
);

// show pagetop
$('#page-top').hide();
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('#page-top').fadeIn(1000);
	} else {
		$('#page-top').fadeOut(300);
	}
});

// show floating
$('.floating').hide();
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.floating').fadeIn(1000);
	} else {
		$('.floating').fadeOut(300);
	}
});
