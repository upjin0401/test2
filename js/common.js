
$(document).ready(function () {


  $(window).scroll(function () {
    if ($(this).scrollTop() > 1700) {
        $('.brand_txt').addClass('fix');

    }
    else {
        $('.brand_txt').removeClass('fix');
                   


    }
});

$(".main_title").textillate({
  loop:true, 
  in:{
    effect: "bounceIn",
    delayScale:2,
    delay:100,
    sequence: true,
  },
  out:{
    effect:"bounceOut",
    delayScale: 2,
    delay: 10,
    reverse: true,
  }
});

//btn
const btn = document.querySelector('.btn');
btn.onmousemove = function(e){
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
}

//스크롤

// time_chk = 0;
// $(document).scroll(function(){
//   s_top = $(this).scrollTop();

//   if(s_top = "0" && s_top < "550" && time_chk == 0){
//     time_chk = 1;

//     //스크롤을없애서 이동못하게..
//     $('html').css("overflow","hidden");

//     //슬라이드 작동 또는 이미지 넘기는 function 호출.

//     //슬라이드, 이벤트가 끝날때 다시 스트롤 보여줌.
//     setTimeout(function(){
//       $('html').css("overflow","scroll");
//     },3000);

//     setTimeout(function(){
//       //혹시나 스크롤을 잡아 끄는 유저를 위해 고민해보셔야 할듯.
//       //한번 실행후 5초간 다시실행되지 않음
//       time_chk = 0;
//     },5000);
//   }
// });

//intro scroll막기
$('.intro').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});






    const design_img = new Swiper(".design_img",{
        autoplay: {
                  delay: 5000,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },

                loop: true, //슬라이드 반복 여부
                speed: 1000 //슬라이드 동작 속도 1초
              });

              

   
    


}); //문서준비이벤트 종료




