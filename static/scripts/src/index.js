$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if( scrollPosition > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
            $("nav > div.logo").css('visibility','visible').fadeIn();
            $("nav > div.nav-toggle").css('visibility','visible').fadeIn();
        } else {
            $("nav").removeClass("nav-fixed");
            $("nav > div.logo").css('visibility','hidden').fadeOut();
            $("nav > div.nav-toggle").css('visibility','hidden').fadeOut();
        }
        // // TODO Active nav link changes on scroll
        // $(".section").each(function() {
        //     var target = $(this).offset().top;
        //     var id = $(this).attr("id");
        //     if( scrollPosition >= target ) {
        //         $("nav > div > h3 > a").removeClass("active");
        //         $("nav > div > h3 > a[href=#" + id + "]").addClass("active");
        //     }
        // });
    });

    // Full screen nav open on click
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
        $(this).find("img").toggle();
    });

    // Full screen nav close on click
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $(".page").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });

    // TODO Highlight active nav link

    // Highlight.js initialization
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
