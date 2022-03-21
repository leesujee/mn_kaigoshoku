//求人例カルーセル
$(function() {
	var owl = $('.owl-carousel--sample');
	owl.owlCarousel({
		items:4,
		loop:true,
		margin:10,
		autoplay:true,
	    nav:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true
	});
	$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[3000])
	})
	$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	})
});
//ご利用者の声カルーセル
$(function() {
	var owl = $('.owl-carousel--voice');
	owl.owlCarousel({
		items:3,
		loop:true,
		margin:25,
		autoplay:false,
	    nav:true,
	});
});
	
//PAGETOPボタン
$(function() {
	var topBtn = $('#page-top');    
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

//追尾ボタン
$(window).on('load',function(){
    var topBtn = $('.follow_btn');
    topBtn.hide();
	var scrollStart = $('#sample_kyujin').offset().top;
	var scrollEnd = $('#flow').offset().top;
	var distance = 0;
	
    $(window).scroll(function () {
		distance = $(this).scrollTop(); //スクロールした距離を取得
		
 		if (scrollStart <= distance && scrollEnd >= distance) {
            topBtn.fadeIn(300);
        } else {
            topBtn.fadeOut("fast");
        }
    });
});
