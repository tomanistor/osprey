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
  // Nav is fixed to top
  $('nav').classList.add('nav-fixed');
  $$('nav > .logo, nav > .nav-toggle').forEach(function(el) {
    el.style.visibility = 'visible';
    el.classList.add('show');
    el.classList.remove('hide');
  });

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

  // Disable scroll when full screen nav is open
  $('body').addEventListener('click', function() {
    if ($('.nav-full').classList.contains('active')) {
      $('html').style.overflowY = 'hidden';
    } else {
      $('html').style.overflowY = 'scroll';
    }
  });

  // Highlight.js initialization
  hljs.initHighlightingOnLoad();
}());
