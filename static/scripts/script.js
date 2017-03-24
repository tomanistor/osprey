$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    $(window).scroll(function() {
        if( $(this).scrollTop() > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
        } else {
            $("nav").removeClass("nav-fixed");
        }
    });

    // Formspree AJAX
    $.ajax({
        url: "https://formspree.io/toma@tomanistor.com",
        method: "POST",
        data: {message: "Thanks for the message! I'll get back to you shortly."},
        dataType: "json"
    });

});
