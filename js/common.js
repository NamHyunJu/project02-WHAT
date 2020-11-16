$(document).ready(function(){
  var _first=$('#gnb [data-link="first"]');
  var _last=$('#gnb [data-link="last"]');
  var timer=0;
  $(window).on('scroll',function(){
    var scrollT=$(this).scrollTop();
    clearTimeout(timer);
    timer=setTimeout(function(){

      $('.fade').each(function(){
        if(scrollT>$(this).offset().top-600){
          $(this).addClass('on');
        }
      },50);
    });
  });


    //메뉴열기 클릭
  $('.btn_menu').on('click',function(){
    $(this).next().show().stop().animate({left:0},300);

    //focus제어
    _first.on('keydown', function (e) {
      console.log(e.keyCode);
      if (e.shiftKey && e.keyCode == 9) { //e.keyCode == 9 탭키
        e.preventDefault(); //return false;
        _last.focus();
      }
    });
    _last.on('keydown', function (e) {
      if (!e.shiftKey && e.keyCode == 9) { //쉬프트를 안누르고 탭만 눌렀을때,쉬프트탭을 눌러도 탭을 누른거니깐 정확하게 적어준다
        e.preventDefault();
        _first.focus();
      }
    });

    $('#gnb .close').on('click',function(){
      $(this).parent().stop().animate({left:'-83.3vw'},300,function(){
        $(this).hide();
        $('.btn_menu').focus();
      });
    });
    //depth1 a 클릭 
    $('#gnb').find('>ul>li>a').on('click', function(){
      $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
      return false;
    });
  });


});