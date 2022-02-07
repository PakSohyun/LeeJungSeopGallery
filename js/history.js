$(document).ready(function(){
    cursor();
    scroll_init();
    more();
    slide();
});

function cursor(){
    $(window).mousemove(function(e){
        var $posX = e.pageX;
        var $posY = e.pageY;
        setTimeout(function(){
            $(".cursor").css({left:($posX+2) + "px" , top:($posY+20) + "px"});
            $(".cursor").css("opacity","1");
        },100)
        
        cursorView(".artist_history .more p");        
        cursorView(".slide_wrap .swiper-slide");        
        function cursorView($target){
            $($target).mouseover(function(){
                $(".cursor").addClass("active");
                $(".cursor span:nth-child(2)").text("view");
            })
            $($target).mouseleave(function(){
                $(".cursor").removeClass("active");
            })
        }
        cursorGo("header h1");        
        cursorGo("header .menu");        
        function cursorGo($target){
            $($target).mouseover(function(){
                $(".cursor").addClass("active");
                $(".cursor span:nth-child(1)").css("background-color","#141414");
                $(".cursor span:nth-child(2)").css("color","#fff");
                $(".cursor span:nth-child(2)").text("go");
            })
            $($target).mouseleave(function(){
                $(".cursor").removeClass("active");
            })
        }
        cursorGo_w("nav a");        
        cursorGo_w(".menu_box .menu");        
        cursorGo_w("footer a");        
        function cursorGo_w($target){
            $($target).mouseover(function(){
                $(".cursor").addClass("active");
                $(".cursor span:nth-child(1)").css("background-color","#fff");
                $(".cursor span:nth-child(2)").css("color","#141414");
                $(".cursor span:nth-child(2)").text("go");
            })
            $($target).mouseleave(function(){
                $(".cursor").removeClass("active");
                $(".cursor span:nth-child(1)").css("background-color","#141414");
                $(".cursor span:nth-child(2)").css("color","#fff");
            })
        }
    })
}

function scroll_init(){
    setTimeout(function(){
        $("section .artist_info .img_box").addClass("active");
        $("section .artist_info .text").addClass("active");
        setTimeout(function(){
            $("section .slide_wrap .swiper-wrapper .swiper-slide figure a .img_box img").css("transition-delay","0s");
        },300)
    },800);

    mouseScroll("section .artist_history h4",0.6);
    mouseScroll("section .artist_history .right .text",0.6);
    mouseScroll(".slide_wrap .swiper-slide .img_box",0.85);
    for(var i = 1; i < 10; i++){
        mouseScroll("section .artist_history .right dl:nth-of-type("+ i +")",(0.7+(i*0.02)));
    } 
}

function mouseScroll($target,$numb){    
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        var $offsetTop = ($($target).offset().top)*$numb;
        if($offsetTop < $top){
            $($target).addClass("active");
        }
    });    
}

function more(){
    $(".artist_history .more p").click(function(){
        $(".artist_history .more").css("display","none");
        $(".artist_history .right").css("height","auto");
    });
}

function slide(){
    var swiper = new Swiper(".slide_wrap", {
        slidesPerView: 'auto',
        spaceBetween: 150,
        loop: true, 
        speed: 1500,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },       
      });  
}
