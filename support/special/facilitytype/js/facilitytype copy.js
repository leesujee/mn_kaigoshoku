// (() => {
// 	let swiper, swiperBool;
// 	const breakPoint = 768;

// 	window.addEventListener(
// 		'load',
// 		() => {
// 			if (breakPoint > window.innerWidth) {
// 				swiperBool = false;
// 			} else {
// 				createSwiper();
// 				swiperBool = true;
// 			}
// 		},
// 		false
// 	);

// 	window.addEventListener(
// 		'resize',
// 		() => {
// 			if (breakPoint > window.innerWidth && swiperBool) {
// 				swiper.destroy(false, true);
// 				swiperBool = false;
// 			} else if (breakPoint <= window.innerWidth && !swiperBool) {
// 				createSwiper();
// 				swiperBool = true;
// 			}
// 		},
// 		false
// 	);

// 	function createSwiper() {
// 		swiper1 = new Swiper('.job-container', {
// 			loop: true,
// 			pagination: {
// 				el: '.swiper-pagination',
// 				type: 'bullets',
// 				clickable: true,
// 			},
// 			navigation: {
// 				nextEl: '.swiper-button-next',
// 				prevEl: '.swiper-button-prev',
// 			},
// 			scrollbar: {
// 				el: '.swiper-scrollbar',
// 			},
// 		});
// 	}
// })();

// job swiper-slide
// let Swiper1 = new Swiper('.job-container', {
// 	loop: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

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

// user_voice swiper-slide
// $(function () {
// 	var swipervoice = new Swiper('#user-voice .swiper-container', {
// 		loop: true,
// 		slidesPerView: 3,
// 		spaceBetween: 10,
// 		centeredSlides: true,
// 		nextButton: '.swiper-button-next',
// 		prevButton: '.swiper-button-prev',
// 		breakpoints: {
// 			640: {
// 				slidesPerView: 1.5,
// 			},
// 		},
// 	});
// });

// user_voice swiper-slide
$(function () {
	var swipervoice = new Swiper('.voice-container', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 10,
		centeredSlides: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			640: {
				slidesPerView: 1.5,
			},
		},
	});
});

$(function () {
	let swiper2 = new Swiper('.voice-container', {
		loop: true,
		slidesPerView: 3,
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
		breakpoints: {
			640: {
				slidesPerView: 1.5,
			},
		},
	});
});
