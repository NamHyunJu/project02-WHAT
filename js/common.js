$(document).ready(function(){
    //메뉴열기 클릭
  $('.btn_menu').on('click', function () {
    if ($(this).hasClass('active')) { //닫기
      $gnb.stop().animate({left: '100%'}, 300, function () {
        $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
      });
      $(this).removeClass('active').find('.blind-b').text('메뉴 열기');
    } else {
      $(this).addClass('active').find('.blind-b').text('메뉴 닫기');
    }
    //depth1 a 클릭
    $gnb.find('>ul>li>a').on('click', function(){
      if ($(this).next().size() === 0) {
        location.href=$(this).attr("href");
      }else {
        $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
      }
      return false;
    });
  });
});