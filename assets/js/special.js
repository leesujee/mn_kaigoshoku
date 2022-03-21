// swiper
var scaleWindowW = function() {
  var w = (window.innerWidth || document.documentElement.clientWidth || 0);
  return w;
};

window.addEventListener('DOMContentLoaded', function() {
  var swiper05 = undefined;
  var swiperEl = document.querySelector('.jobofferlist .swiper-container');
  var swiperWrapper = document.getElementsByClassName('swiper-wrapper');
  var swiperSlide = document.getElementsByClassName('swiper-slide');

  var initSwiper = function() {
    if (scaleWindowW() < 767 && swiper05 == undefined) {
      swiper05 = new Swiper(swiperEl, {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: false,
        slidesPerView: 'auto',
        centeredSlides : true,
      });
    } else if (scaleWindowW() >= 767 && swiper05 != undefined) {
      swiper05.destroy();
      swiper05 = undefined;
      for ( var i = 0; i < swiperWrapper.length; i++ ) {
        swiperWrapper[i].removeAttribute('style');
      }
      for ( var i =0; i < swiperSlide.length; i++ ) {
        swiperSlide[i].removeAttribute('style');
      }
    }
  }
  initSwiper();

  window.addEventListener('resize',initSwiper);
}, false);

// fade-in
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.effect-fade').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("effect-scroll");
          }
      });
  });
});
// effect scroll
$(function() {
  $(window).scroll(function() {
      $('.effect-fade').each(function() {
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight) {
              $(this).addClass('effect-scroll');
          }
      });
  });
});