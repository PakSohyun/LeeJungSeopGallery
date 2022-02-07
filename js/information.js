$(document).ready(function(){
    cursor();
    scroll_init();
    rolling();
});

function cursor(){
    $(window).mousemove(function(e){
        var $posX = e.pageX;
        var $posY = e.pageY;
        setTimeout(function(){
            $(".cursor").css({left:($posX+2) + "px" , top:($posY+20) + "px"});
            $(".cursor").css("opacity","1");
        },100)
        
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
        cursorGo(".rolling .roll a");        
        cursorGo(".enquiry .contact a");        
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
        $("section .info .img_box").addClass("active");
    },800);

    mouseScroll("section .info .text",0.5);
    mouseScroll("section .time .text",0.7);
    mouseScroll("section .price .text",0.75);
    mouseScroll("section .enquiry .text",0.8);
    mouseScroll("section .time .img_box",0.75);
    mouseScroll("section .price .img_box",0.75);
    mouseScroll("section .enquiry .img_box",0.8);
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

function rolling(){
    
    var i = 1;
    var $top;
    var $rollTop = ($(".rolling").offset().top)*0.6;
    var $rollBottom = ($(".rolling").offset().top)*1.2;
    $("body").on("mousewheel", function (event) {
        $top = $(window).scrollTop();
        var $mousewheel = event.originalEvent.wheelDelta;
            if($rollTop < $top && $top < $rollBottom){

                
                if($mousewheel == -120){
                    i++;                
                }if($mousewheel == 120){
                    i--;
                }; 
                var $xpos = 50 * i;     
                
                $(".rolling .roll:nth-child(1) ul").css("transform","translateX("+(-$xpos)+"px)"); 
                $(".rolling .roll:nth-child(2) ul").css("transform","translateX("+(+$xpos)+"px)"); 
                
        }
    });                 
}