$(document).ready(function() {

    // Nav is fixed to top
    $("nav").addClass("nav-fixed");
    $("nav > div.logo").css('visibility','visible').fadeIn();
    $("nav > div.nav-toggle").css('visibility','visible').fadeIn();

    // Full screen nav open on click
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(this).find("img").toggle();
    });

    // Full screen nav close on link click
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });

    // Highlight.js initialization
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
