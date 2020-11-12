$(document).ready(function(){
  //본문1 슬라이더
  var mySwiper = new Swiper('.main_visual .swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay : 2500,
    },
  });
  //일시정지
  $('.main_visual .autostop').on('click',function(){
    $(this).hide().siblings('.btn').show();
    mySwiper.autoplay.stop();
    return false;
  });
  //시작
  $('.main_visual .autoplay').on('click',function(){
    $(this).hide().siblings('.btn').show();
    mySwiper.autoplay.start();
    return false;
  });

  //본문3
  $('.main_info .txtwrap ul a').each(function(){
    var limitLen = 25;
    $(this).each(function(){
      if($(this).text().length>limitLen){
        $(this).text( $(this).text().substr(0,limitLen)+'...');
      }
    });
  });



});