//intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        logoSpan.forEach((span, index) =>{
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });
        setTimeout(() => {
            logoSpan.forEach((span, index) =>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });
        },2000);
        setTimeout(() => {
            intro.style.top = '-100vh'
        },2300);

    });



    });


    gsap.registerPlugin(ScrollTrigger);

    function SectionGroup__init(){
        $('.section-group--horizontal-right').each(function(index, node){
            var $group = $(node);
            var $section = $group.find('> .section');

            gsap.to($section, {
                xPercent: -100 * ($section.length -1),
                ease:"none",
          
                scrollTrigger:{
                    trigger: $group,
                    start:"top top",
               
                    end:"+=" + ($section.length -1) + "00%",
                    pin:true,
                    scrub:true,
                    makers:true
                  

                }
            });
        });
    }

    SectionGroup__init();
    
