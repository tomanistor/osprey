var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var toggle = function(el) {
  // If element is visible, hide it
  if (window.getComputedStyle(el).visibility === 'visible') {
    el.style.visibility = 'hidden';
    el.classList.add('hide')
    el.classList.remove('show');
    return;
  };

  // If element is hidden, show it
  el.style.visibility = 'visible';
  el.classList.add('show')
  el.classList.remove('hide');
};

(function() {
  // Nav starts at bottom then is fixed to top
  // Logo and hamburger menus fade in and out
  // $(window).scroll(function() {
  //     var scrollPosition = $(this).scrollTop();
  //     if( scrollPosition > $(this).height() - $("nav").height() ) {
  //         $("nav").addClass("nav-fixed");
  //         $("nav > div.logo").css('visibility','visible').fadeIn();
  //         $("nav > div.nav-toggle").css('visibility','visible').fadeIn();
  //     } else {
  //         $("nav").removeClass("nav-fixed");
  //         $("nav > div.logo").css('visibility','hidden').fadeOut();
  //         $("nav > div.nav-toggle").css('visibility','hidden').fadeOut();
  //     }
  // });

  // Nav starts at bottom then is fixed to top
  // Logo and hamburger menus fade in and out
  window.onscroll = function() {
    var scrollPosition = this.scrollTop();
    if (scrollPosition > this.innerHeight - parseInt(getComputedStyle('nav').height)) {
      // Nav is fixed to top
      $('nav').classList.add('nav-fixed');
      $$('nav > .logo, nav > .nav-toggle').forEach(function(el) {
        el.style.visibility = 'visible';
        el.classList.add('show');
        el.classList.remove('hide');
      });
    } else {
      // Nav is not fixed
      $('nav').classList.remove('nav-fixed');
      $$('nav > .logo, nav > .nav-toggle').forEach(function(el) {
        el.style.visibility = 'hidden';
        el.classList.add('hide');
        el.classList.remove('show');
      });
    }
  };

  // Full screen nav open on click
  $('.nav-icon').addEventListener('click', function() {
    $$('.nav-full, main').forEach(function(el) {
      el.classList.toggle('active');
    });
    this.querySelector('img').classList.toggle('img');
  });

  // Full screen nav close on click
  $$('.nav-full a').forEach(function(links) {
    links.addEventListener('click', function() {
      $$('.nav-full, main').forEach(function(el) {
        el.classList.toggle('active');
      })
      this.querySelector('nav-icon').classList.toggle('nav-icon');
    });
  });

}());

// Mobile browsers viewport height bug fix
function fullMobileViewport() {
  var element = this;
  var viewportHeight = window.innerHeight;
  var heightChangeTolerance = 100; // Approximately URL bar height in Chrome

  $(window).resize(function () {
    if (Math.abs(viewportHeight - window.innerHeight) > heightChangeTolerance) {
      viewportHeight = window.innerHeight;
      update();
    }
  });

  function update() {
    element.style.height = (viewportHeight + 'px');
  }

  update();
}
$('header').forEach(function(el) {
  fullMobileViewport;
});


// Mobile browsers viewport height bug fix
// function fullMobileViewport() {
//   var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome
//   var element = $(this);
//   var viewportHeight = $(window).height();
//
//   $(window).resize(function () {
//     if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
//       viewportHeight = $(window).height();
//       update();
//     }
//   });
//
//   function update() {
//     element.css("height", viewportHeight + "px");
//   }
//
//   update();
// }
// $("header").each(fullMobileViewport);
