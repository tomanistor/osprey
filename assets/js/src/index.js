(function() {
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),

      menuActive = false

  // Nav starts at bottom then is fixed to top
  // Logo and hamburger menus fade in and out
  window.onscroll = function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop,
        windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        navHeight = $('nav').clientHeight

    if (scrollPosition > windowHeight - navHeight) {
      // Nav is fixed to top
      $('nav').classList.add('nav-fixed')
      $$('nav > .logo, nav > .nav-toggle').forEach(function(el) {
        el.style.visibility = 'visible'
        el.classList.add('show')
        el.classList.remove('hide')
      })
    } else {
      // Nav is not fixed
      $('nav').classList.remove('nav-fixed')
      $$('nav > .logo, nav > .nav-toggle').forEach(function(el) {
        el.style.visibility = 'hidden'
        el.classList.add('hide')
        el.classList.remove('show')
      })
    }
  }

  // Full screen nav open on click
  $('.nav-icon').addEventListener('click', function() {
    $$('.nav-full, main').forEach(function(el) {
      el.classList.toggle('active')
    })
    if (menuActive) {
      this.querySelector('img:nth-of-type(1)').style.display = 'inline-block'
      this.querySelector('img:nth-of-type(2)').style.display = 'none'
      menuActive = false
    } else {
      this.querySelector('img:nth-of-type(1)').style.display = 'none'
      this.querySelector('img:nth-of-type(2)').style.display = 'inline-block'
      menuActive = true
    }
  })

  // Full screen nav close on click
  $$('.nav-full a').forEach(function(links) {
    links.addEventListener('click', function() {
      $$('.nav-full, main').forEach(function(el) {
        el.classList.toggle('active')
      })
    })
  })

  // Fix logoBig drawing over nav when click on logoSmall while nav open
  $('.logo').addEventListener('click', function() {
    if ($('.nav-full').classList.contains('active')) {
      $$('.nav-full, main').forEach(function(el) {
        el.classList.toggle('active')
      })
    }
  })

  // Disable scroll when full screen nav is open
  $('body').addEventListener('click', function() {
    if ($('.nav-full').classList.contains('active')) {
      $('html').style.overflowY = 'hidden'
    } else {
      $('html').style.overflowY = 'scroll'
    }
  })

  // Mobile browsers viewport height bug fix
  function fullMobileViewport() {
    var element = this,
        viewportHeight = window.innerHeight,
        heightChangeTolerance = 100 // Approximate address bar height in Chrome

    $(window).resize(function() {
      if (Math.abs(viewportHeight - window.innerHeight) > heightChangeTolerance) {
        viewportHeight = window.innerHeight
        update()
      }
    })

    function update() {
      element.style.height = (viewportHeight + 'px')
    }

    update()
  }

  $$('header').forEach(function() {
    fullMobileViewport
  })
})()
