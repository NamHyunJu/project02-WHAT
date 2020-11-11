$(document).ready(function(){
  //본문1 슬라이더
  var mySwiper = new Swiper('.main_visual .swiper-container', {
    slidesPerView: 1,
    //spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay : 3000,
    },
  });
  //일시정지
  $('.main_visual .autostop').on('click',function(){
    $(this).hide().siblings().show();
    mySwiper.autoplay.stop();
    return false;
  });
  //시작
  $('.main_visual .autoplay').on('click',function(){
    $(this).hide().silblings().show();
    mySwiper.autoplay.start();
    return false;
  });

  //본문3
  

});