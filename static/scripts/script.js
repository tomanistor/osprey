$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    $(window).scroll(function() {
        if( $(this).scrollTop() > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div").first().fadeIn();
            $("nav > div").last().fadeIn();
            // $("nav > div").last().removeClass("hidden");
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div").first().fadeOut();
            $("nav > div").last().fadeOut();
            // $("nav > div").last().addClass("hidden");
        }
    });

    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
    });
});
