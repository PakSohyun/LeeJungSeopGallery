$(document).ready(function(){
    control_mouse();
    cursor();
    slide();
    laoding();
    main();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

function cursor(){
    $(window).mousemove(function(e){
        var $posX = e.pageX;
        var $posY = e.pageY - scrollY;
        setTimeout(function(){
            $(".cursor").css({left:($posX+2) + "px" , top:($posY+20) + "px"});
            $(".cursor").css("opacity","1");
        },100)
        
        cursorView("main .slide .hover");        
        function cursorView($target){
            $($target).mouseover(function(){
                $(".cursor").addClass("active");
                $(".cursor span:nth-child(2)").text("view");
            })
            $($target).mouseleave(function(){
                $(".cursor").removeClass("active");
            })
        }
        cursorGo("nav a");        
        function cursorGo($target){
            $($target).mouseover(function(){
                $(".cursor").addClass("active");
                $(".cursor span:nth-child(2)").text("go");
            })
            $($target).mouseleave(function(){
                $(".cursor").removeClass("active");
            })
        }
    })
}

function slide(){  
    var $slide_clone = $("main .slide_wrapper").clone();
    $("main .slide_wrapper").after($slide_clone);
}

function laoding(){
    var $video = $("video").get(0);
    $video.play();

    $({value: 0}).animate({value: 100}, {
        duration: 5000,
        step: function() {
          $(".loading .load_bar p").text(Math.floor(this.value)+"%");
        },
        complete: function() {
          $(".loading .load_bar p").text(Math.floor(this.value)+"%");
        }
    });  

    setTimeout(function(){
        $(".loading").addClass("active");
        setTimeout(function(){
            $(".loading").fadeOut(600);
        },700);
    },6000);  
}

function main(){
    setTimeout(function(){
        $("main").addClass("active");
        $("nav").addClass("active");
        $("header").addClass("active");
    },7000);
}