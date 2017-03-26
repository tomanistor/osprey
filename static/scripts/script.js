$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    $(window).scroll(function() {
        if( $(this).scrollTop() > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
        } else {
            $("nav").removeClass("nav-fixed");
        }
    });

});
