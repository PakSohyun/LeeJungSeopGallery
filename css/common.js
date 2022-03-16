$(document).ready(function(){
    control_mouse();   
    menu();
    tit();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지    
}

function menu(){
    $("header .menu").click(function(){
        $("header .menu").addClass("active");
        $(".menu_box").addClass("active");
        $("body").css("overflow-y", "hidden");
    });
    $(".menu_box .menu").click(function(){
        $("header .menu").removeClass("active");
        $(".menu_box").removeClass("active");
        $("body").css("overflow-y", "scroll");
    });
    var $activeTemp;
    $(".menu_box nav ul li a").mouseover(function(){
        $activeTemp = $(".menu_box nav a.active").attr("id");
        var $navImags = $(this).attr("id");
        $(".img_wrap .img_box").removeClass("active");
        $("." + $navImags).addClass("active");

    });
    $(".menu_box nav ul li a").mouseleave(function(){
        $(".img_wrap .img_box").removeClass("active");
        $("." + $activeTemp).addClass("active");
    });
}

function tit(){
    setTimeout(function(){
        $("section h3").addClass("active");        
    },300);
}