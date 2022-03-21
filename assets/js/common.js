/**
 * global nav
 */

var gNavShow = function (){
  $(".js-gNavShow").on('click', function(){
    $(this).toggleClass('is-close');
    if($('.l-gNav').is(':hidden')){
      $('.l-gNav').slideDown(400,'swing');
      $('.l-overlay').fadeIn(400).css({'z-index': '10'});
    } else if($('.l-gNav').is(':visible')){
      $('.l-gNav').slideUp(400,'swing');
      $('.l-overlay').fadeOut(
        400,
        function(){
          $(this).css({'z-index': '30'})
        });
    }
    return false;
  });
}



jQuery.event.add(window,"load",function() {
  gNavShow();
});

/**
 * hide nav
 */

var hideGuideNav = function (){
  var url = window.location.pathname;
  // var target = ['/search/', '/r/', '/d/', '/support/qualification/', '/support/facilities/'];
  var target1 = '/support/qualification/';
  var target2 = '/support/facilities/';
  var target3 = '/r/';
  var target4 = '/d/';
  if(~target1.indexOf(url) && ~target2.indexOf(url) && ~target3.indexOf(url) && ~target4.indexOf(url)){
    $('.guideNav').removeClass('is-hide');
  }

}



$(function(){
  hideGuideNav();
});

$(function() {
  $(".lazy").Lazy();
});

/**
 * モーダル操作
 */


var modal = function (){
  var modalFlag = false;
  var scrollpos = $(window).scrollTop();
  var modalName;



  $('.l-wrapper').on('click','.js-modal', function(){//汎用モーダル表示・非表示
    if(modalFlag == false){

      //モーダル名を取得
      modalName = $(this).attr('data-target-modal');

      //モーダルと一緒にbodyがスクロールしないようにするための処理
      scrollpos = $(window).scrollTop();
      $('body').addClass('is-fixed').css({'top': -scrollpos});

      //ガイドナビをオーバーレイの下のレイヤーにしておく(クリックさせないため)
      $('.guideNav').addClass('is-currentSearch');

      //モーダル表示
      $('.modal[data-modal-name='+ modalName +']').addClass('is-show');

      //ガイドナビの吹き出しをフェードアウトさせておく
      $(".js-guideBubble").fadeOut(400);


      //グローバルナビの状態によって処理を変える
      //スマホサイズの時の処理
      if(winSizeCurrent == 'sm'){

        //グローバルナビが閉じている時の処理
        if($('.l-gNav').is(':hidden')){
          $('.l-overlay').fadeIn(400).addClass('js-modal').removeClass('js-guideModal');
        }

        //グローバルナビが開いている時の処理
        else if($('.l-gNav').is(':visible')){
            $('.js-gNavShow').toggleClass('is-close');
            $('.l-gNav').slideUp(400,'swing');

          $('.l-overlay').css({'z-index': ''});
        }
      }
      //PCサイズの時の処理（PCサイズではグローバルナビは常に表示されているため開閉の判別はなし）
       else if(winSizeCurrent == 'lg'){
        $('.l-overlay').fadeIn(400).addClass('js-modal').removeClass('js-guideModal');
      }


      //ガイドモーダルが開いていたら閉じる
      if(guideModalFlag == true){
        $('.guideModal[data-modal-name="guide"]').fadeOut(400);
        guideModalFlag = false;
      }

      countUp();//検索数のカウントアップスクリプト
      bubbleFlag = true;
      modalFlag = true;

    } else {

      //bodyの固定をもとに戻す
      $('body').removeClass('is-fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );

      //ガイドナビをもとの深度に戻す
      $('.guideNav').removeClass('is-currentSearch');

      $('.l-overlay').fadeOut(400).removeClass('js-modal');
      $('.modal[data-modal-name='+ modalName +']').removeClass('is-show');
      modalFlag = false;
    }
    return false;
  });
}


$(function(){
  modal();
});

/**
 * mdサイズの時は電話機能を無効
 */

var preventCall = function (){
  $('.js-preventCall').on('click', function(e){
    e.preventDefault();
  });
}

$(function(){
  if(winSize.isLg() == true){
    preventCall();
  }
});

/**
 * 指定したIDの位置までスムーススクロールで移動
 */

var smoothScroll = function (){
  $('a[href^="#"]').on('click', function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);

    if( $(target).length < 1 ) return false;
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}

$(function(){
  smoothScroll();
});

/**
 * 汎用タブ操作
 */


var tab = function (){
  var tabGroup;
  var tabParentName;



  $('.js-tab').on('click', function(){
    tabGroup = $(this).attr('data-tab-group');
    tabParentName = $(this).attr('data-tab-parent-name');
    $(this).closest('form').find('[data-tab-group='+ tabGroup +'][data-tab-child-name]').each(function() {
      $(this).addClass('u-d-n');
    });
    $(this).closest('form').find('[data-tab-group='+ tabGroup +'][data-tab-child-name='+ tabParentName +']').addClass('u-d-bl').removeClass('u-d-n');
  });
}


$(function(){
  tab();
});

/**
 * 汎用トグル
 */

var toggle = function (){
  $('.js-toggle').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('is-show');
    $(this).next().slideToggle();
    return false;
  });
}

var toggleAll = function (){
  $('body').on('click','.js-toggleAll', function(e){
    e.preventDefault();
    if(!$(this).hasClass('is-disabled')){
      $(this).toggleClass('is-show');
      $(this).next().slideToggle();
    }
    return false;
  });
}

$(function(){
  if(winSizeCurrent == 'sm'){
    toggle();
  }
  toggleAll();
});

/**
 * 汎用画像トリミング

基本はpcサイズのみでイベントが起こる。
data-trim-triger="true" でspサイズでもイベントが起こる。

 */



var trimImage = function (triger){
  var target = '.js-trimImage';
  var trimTriger;
  var thisItem;


  var iw, ih, fw, fh, w, h;
  $('img',target).each(function(){
    thisItem = $(this);
    trimTriger = thisItem.closest(target).attr('data-trim-triger');

    if(trimTriger == 'true' || winSize.isLg() == true){
      fw = thisItem.closest(target).attr('data-trim-width');// サムネイルの幅
      fh = thisItem.closest(target).attr('data-trim-height');// サムネイルの高さ
      w = thisItem.width(); // 画像の幅(原寸)
      h = thisItem.height(); // 画像の高さ(原寸)




      // 横幅パーセント指定だったら親のピクセルサイズを入れる
      if(fw.indexOf('100%') != -1){
        fw = thisItem.closest(target).width();
      }




      //横長の画像の場合
      if (w >= h) {
        iw = (fh/h*w-fw)/2;
        thisItem.height(fh); //高さをサムネイルに合わせる
        thisItem.css("top",0);
        thisItem.css("left","-"+iw+"px");//画像のセンター合わせ

        //この時点でボックス幅よりもサムネイル幅が狭い場合の処理
        if(fw > $(this).width()){
          thisItem.removeAttr('style'); //一度リセット
          trimHeighter();
        }

        //横長だけど設定高よりも画像の高さが足りない場合
        if(fh > h){
            thisItem.removeAttr('style'); //一度リセット
            trimHeighter2();
        }

      }

      //縦長の画像の場合
      else {
        trimHeighter();
      }
    }
  });


  //縦長の画像の場合の処理
  function trimHeighter(){
    ih = (fw/w*h-fh)/2;
    thisItem.width(fw); //幅をサムネイルに合わせる
    thisItem.css("top","-"+ih+"px");//画像のセンター合わせ
    thisItem.css("left",0);
  }

  //横長だけど設定高よりも画像の高さが足りない場合の処理
  function trimHeighter2(){
    fw2 = (fh*w/h);
    iw = (fh/h*w-fw)/2;
    thisItem.css('max-width','none');
    thisItem.width(fw2); //幅を縮尺調整
    thisItem.height(fh); //高さをサムネイルに合わせる
    thisItem.css("top",0);
    thisItem.css("left","-"+iw+"px");//画像のセンター合わせ
  }





}

jQuery.event.add(window,"load",function() {
  trimImage();
});
/**
 * ウィンドウサイズを取得
 */
var winSize = {
    w : '',
    h : '',
    init : function(){
        this.w = window.innerWidth;
        this.h = window.innerHeight;
    },
    isLg : function(){
        return (this.w >= 768 ) ? true : false;
    },
    isSm : function(){
        return (this.w <= 767 ) ? true : false;
    },
};

winSize.init();

var winSizeCurrent ;//最初のウィンドウサイズを判定
if(winSize.isSm() == true){
  winSizeCurrent = 'sm';
}else{
  winSizeCurrent = 'lg';
}




//ウィンドウサイズが768以上から767以下に切り替わった時、または767以下から768以上に切り替わった時に発生するイベント
var initStyles = function (){
  if(winSize.isSm() == true && winSizeCurrent == 'lg'){//767以下に切り替わったとき

    winSizeCurrent = 'sm';
  } else if(winSize.isLg() == true && winSizeCurrent == 'sm'){//768以上に切り替わったとき
    //グロナビ初期化
    $('.js-gNavShow').removeClass('is-close');
    $('.l-gNav').removeAttr('style');
    $('.l-overlay').removeClass('is-show');
    winSizeCurrent = 'lg';
  }
}


var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
      winSize.init();
      initStyles();
    }, 200);
});


/* 20200924追加 */
var w = $(window).width();
var x = 768;
if (w <= x) {
    jQuery(function ($) {
        var menuHeight = $(".l-header").height();
        var startPos = 0;
        $(".l-header").css("top", menuHeight + "px 0 0 0");
        $(window).scroll(function(){
            var currentPos = $(this).scrollTop();
            if (currentPos > startPos) {
                if($(window).scrollTop() >= 379) {
                    $(".l-header").css("top", "-" + menuHeight + "px");
                }
            } else {
                $(".l-header").css("top", 0 + "px");
            }
            startPos = currentPos;
        });
    });
}









