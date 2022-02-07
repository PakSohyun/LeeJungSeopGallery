$(document).ready(function(){
    cursor();
    scroll_init();
    mouseClick();
    click_init();
});

function cursor(){
    $(window).mousemove(function(e){
        var $posX = e.pageX;
        var $posY = e.pageY;
        setTimeout(function(){
            $(".cursor").css({left:($posX+2) + "px" , top:($posY+20) + "px"});
            $(".cursor").css("opacity","1");
        },100)
        
        cursorView("section .inner > div ul li figure .img_box img");        
        cursorView("section .inner > div ul li figure figcaption dl");        
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
        cursorBack("section .view img"); 
        function cursorBack($target){
            $($target).mouseover(function(){
                $(".cursor").addClass("active");
                $(".cursor span:nth-child(1)").css("background-color","#141414");
                $(".cursor span:nth-child(2)").css("color","#fff");
                $(".cursor span:nth-child(2)").text("back");
            })
            $($target).mouseleave(function(){
                $(".cursor").removeClass("active");
            })
        }
    })
}

function scroll_init(){
    setTimeout(function(){
        $("section .inner > div ul li:nth-child(1) .img_box").addClass("active");        
        setTimeout(function(){
            $("section .inner > div ul li:nth-child(1) .img_box img").css("transition-delay","0s");   
        },700);
    },800);
    
    for(var i = 1; i < 6; i++){
        mouseScroll("section .inner .first li:nth-of-type("+ i +") .img_box",(0.5+(i*0.065)));        
        mouseScroll("section .inner .middle li:nth-of-type("+ i +") .img_box",(0.5+(i*0.065)));        
    } 
    for(var i = 1; i < 7; i++){    
        mouseScroll("section .inner .last li:nth-of-type("+ i +") .img_box",(0.5+(i*0.055)));        
    } 
}

function mouseScroll($target,$numb){    
    $(window).scroll(function(){
        var $top = $(window).scrollTop();
        var $offsetTop = ($($target).offset().top)*$numb;
        if($offsetTop < $top){
            $($target).addClass("active");
            setTimeout(function(){
                $($target).children().css("transition-delay","0s");
            },700);
        }        
    });    
}

function click_init(){
    mouseClick("section .inner > div ul li figure .img_box img");
    mouseClick("section .inner > div ul li figure figcaption dl");
}

function mouseClick($target){
    $($target).click(function(){
        var $list = $(this).closest("li").attr("id");
        $("section .view").fadeIn();
        $("." + $list).addClass("active");
        $("body").css("overflow-y", "hidden");
    });    
    $("section .view img").click(function(){
        $("section .view").fadeOut();
        $("section .view li").removeClass("active");
        $("section .view li").removeClass("active");
        $("body").css("overflow-y", "scroll");
    });  
}