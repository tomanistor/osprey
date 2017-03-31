$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    $(window).scroll(function() {
        if( $(this).scrollTop() > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div.logo").find("a").fadeIn();
            $("nav > div.nav-toggle").find("a").fadeIn();
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div.logo").find("a").fadeOut();
            $("nav > div.nav-toggle").find("a").fadeOut();
        }
    });

    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
    });
});
