$(document).ready(function(){
    cursor();
    scroll_init();
    more();
    slide();
});

function cursor(){
    if($(window).outerWidth() >= 1025){
        $(window).mousemove(function(e){
            var $posX = e.pageX;
            var $posY = e.pageY - scrollY;
            setTimeout(function(){
                $(".cursor").css({left:($posX+2) + "px" , top:($posY+20) + "px"});
                $(".cursor").css("opacity","1");
            },100)
            
            cursorView(".artist_history .more p");        
            function cursorView($target){
                $($target).mouseover(function(){
                    $(".cursor").addClass("active");
                    $(".cursor span:nth-child(2)").text("view");
                })
                $($target).mouseleave(function(){
                    $(".cursor").removeClass("active");
                })
            }
            cursorMore(".slide_wrap .swiper-slide");        
            function cursorMore($target){
                $($target).mouseover(function(){
                    $(".cursor").addClass("active");
                    $(".cursor span:nth-child(2)").text("more");
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
}

function scroll_init(){
    setTimeout(function(){
        $("section .artist_info .img_box").addClass("active");
        $("section .artist_info .text").addClass("active");
        setTimeout(function(){
            $("section .slide_wrap .swiper-wrapper .swiper-slide figure a .img_box img").css("transition-delay","0s");
        },300)
    },800);

    mouseScroll("section .artist_history h4");
    mouseScroll("section .artist_history .right .text");
    mouseScroll(".slide_wrap .swiper-slide .img_box");
    for(var i = 1; i < 10; i++){
        mouseScroll("section .artist_history .right dl:nth-of-type("+ i +")");
    } 
}

function mouseScroll($target){    
    if($(window).outerWidth() > 1025){ 
        $(window).scroll(function(){
            var $top = $(window).scrollTop();
            var $offsetTop = ($($target).offset().top)-500;
            if($offsetTop < $top){
                $($target).addClass("active");
            }
        });    
    }
    if($(window).outerWidth() > 767 && $(window).outerWidth() < 1024){
        $(window).scroll(function(){
            var $top = $(window).scrollTop();
            var $offsetTop = ($($target).offset().top)-800;
            if($offsetTop < $top){
                $($target).addClass("active");
            }
        });    
    }
    if($(window).outerWidth() < 768){
        $(window).scroll(function(){
            var $top = $(window).scrollTop();
            var $offsetTop = ($($target).offset().top)-500;
            if($offsetTop < $top){
                $($target).addClass("active");
            }
        });    
    }
}

function more(){
    $(".artist_history .more p").click(function(){
        $(".artist_history .more").css("display","none");
        $(".artist_history .right").css("height","auto");
    });
}

function slide(){
    if($(window).outerWidth() > 1025){  
        var swiper = new Swiper(".slide_wrap", {
            slidesPerView: 'auto',
            spaceBetween: 152,
            loop: true, 
            speed: 1500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },       
        });  
    }
    if($(window).outerWidth() > 767 && $(window).outerWidth() < 1024){
        var swiper = new Swiper(".slide_wrap", {
            slidesPerView: 'auto',
            spaceBetween: 96,
            loop: true, 
            speed: 1500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },       
        });  
    }
    if($(window).outerWidth() < 768){
            var swiper = new Swiper(".slide_wrap", {
            slidesPerView: 'auto',
            spaceBetween: 56,
            loop: true, 
            speed: 1500,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },       
        });  
    }
}
