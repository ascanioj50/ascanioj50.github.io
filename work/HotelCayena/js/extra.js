"use_strict"

$body = $("body");
$menu = $body.find("#menu");
$overlay = $body.find(".extra-overlay");
$closeBtn = $overlay.find(".btn-close");
$innerWrapper = $body.find(".inner-wrapper");
$idea = $body.find("#idea");
$text1 = $innerWrapper.find(".text .a");
$text2 = $innerWrapper.find(".text .b");
let $textWrapper = $("#menu").find(".textwrapper");
let $parallaxWrapper = $("#menu").find(".parallax-wrapper");

let TL = new TimelineMax();

$menu.off();

let cOffsetTop;
let cOffsetLeft;
let cHeight;
let cWidth;
let imgUrl;
let cBoxshadow;

$menu.on("click", function() {
    disableContentSwiper();
    $(this).off();
    //console.log(1)
    toggleMenu($(this));
});



function toggleMenu($this) { 
   
    cOffsetTop =  $this.offset().top;
    cOffsetLeft = $this.offset().left;
    cHeight = $this.innerHeight();
    cWidth = $this.innerWidth();
    cimgUrl = $this.find("img").attr("src");
    cBoxshadow = $this.find(".parallax-wrapper").css("box-shadow");

    TL.to($textWrapper, 0.025, { "z-index": 10000, opacity: 0 });
    TL.to($this, 0, { opacity:0 }, "a");
    TL.call(function() {
        $innerWrapper.css({
            "top": cOffsetTop+"px",
            "left": cOffsetLeft+"px",
            "height": cHeight+"px",
            "width": cWidth+"px",
            "z-index": 100000000
        });
    }, "a");
    TL.addCallback( function() {      
        $innerWrapper.find(".a").attr("src", cimgUrl);
        setTimeout(function() { 
            
            $innerWrapper.css("top", "");
            $innerWrapper.css("left", ""); 
            $idea.addClass("transform-left");
            $innerWrapper.toggleClass("active");        
            $text1.toggleClass("active");
            $text2.toggleClass("active");
            $innerWrapper.find(".a").toggleClass("active");
            $innerWrapper.find(".b").toggleClass("active");
            $innerWrapper.find(".c").toggleClass("active");
            $innerWrapper.parent().toggleClass("active"); 
            $innerWrapper.on("transitionend", function() {
                $overlay.toggleClass("active");
                $innerWrapper.off("transitionend");      
            });
            TL = new TimelineMax();
        },50);  
    });  
}

$closeBtn.on("click", function() {    
   
    $innerWrapper.toggleClass("active");
    $innerWrapper.css({
        "top": cOffsetTop+"px",
        "left": cOffsetLeft+"px",
        "height": cHeight+"px",
        "width": cWidth+"px"
    });
    $idea.removeClass("transform-left");
    $overlay.toggleClass("active");
    $innerWrapper.find(".a").toggleClass("active");
    $innerWrapper.find(".b").toggleClass("active");
    $innerWrapper.find(".c").toggleClass("active");
    $innerWrapper.parent().toggleClass("active"); 
    $text1.toggleClass("active");
    $text2.toggleClass("active");
    $menu.find(".parallax-wrapper").css("box-shadow", "none");

    $innerWrapper.on("transitionend" , function() {       
        $innerWrapper.off();

        TL.to($innerWrapper, 0.01, { opacity: 0, zIndex: 0  }, "start");
        TL.to($menu, 0.01, { opacity: 1 }, "start");  
        TL.to($parallaxWrapper, 0.1, { boxShadow: cBoxshadow }, "last");    
        TL.to($textWrapper, 0.1, { opacity: 1 }, "last"); 
        
        TL.addCallback(function() {   
            $innerWrapper.attr("style", "");                
            enableContentSwiper();  
            $("#menu").on("click", function() {
                disableContentSwiper();
                $("#menu").off();
                //console.log(2);
                toggleMenu($("#menu"));
            });   
            TL = new TimelineMax();         
        });
    });
});

function disableContentSwiper() {
    contentSwiper.allowSlidePrev = false;
    contentSwiper.allowSlideNext = false;
}

function enableContentSwiper() {
    contentSwiper.allowSlidePrev = true;
    contentSwiper.allowSlideNext = true; 
}



