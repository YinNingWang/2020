

// $("#content").scrollTop(function() {
//     $("header#header").toggleClass("stuck");
// });

$( "p" ).click(function() {
  $( this ).toggleClass( "highlight", 1000 , "easeOutSine" );
});


//漢堡
$(document).ready(function() {
    $(".menu_toggle").click(function() {
    $(this).toggleClass("active");
    $(".nav").slideToggle();
    });
    $(".nav > ul > li:has(ul) > a").append('<div class="arrow-bottom"></div>');
});


//Go to top專區
$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 700){
        $('#gotop').fadeIn().css('opacity','100');
    } else {
        $('#gotop').stop().fadeOut();
    }
});
