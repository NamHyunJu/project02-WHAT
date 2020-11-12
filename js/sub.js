$(document).ready(function(){
    //본문1 슬라이더
    var mySwiper1 = new Swiper('.sub_visual .swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        autoplay: {
          delay : 10000,
        },
      });

    //일시정지
    $('.sub_visual .autostop').on('click',function(){
    $(this).hide().siblings('.btn').show();
    mySwiper.autoplay.stop();
    return false;
    });

    //시작
    $('.sub_visual .autostop').on('click',function(){
    $(this).hide().siblings('.btn').show();
    mySwiper.autoplay.stop();
    return false;
    });

    //본문2 슬라이더
    var swiper2 = new Swiper('.tattooist .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 9,
        scrollbar:{
            draggable:true,
        },
        a11y:{
            firstSlideMessage:'첫번째 슬라이드',
            lastSlideMessage:'마지막 슬라이드',
          }
      });

    //본문3 슬라이더
    var swiper3 = new Swiper('.coverup .swiper-container', {
        slidesPerView: 1,
        pagination:{
            el: '.swiper-pagination',
        },
        scrollbar:{
            draggable:true,
        },
        a11y:{
            firstSlideMessage:'첫번째 슬라이드',
            lastSlideMessage:'마지막 슬라이드',
          }
      });

});