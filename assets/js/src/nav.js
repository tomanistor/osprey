function handleNavBar(isMainPage) {
  menuActive = false
  var nav = $('nav')

  function setFixedNav(isFixed) {
    if (isFixed) {
      // Fixed to top
      nav.classList.add('nav-fixed')
      nav.classList.add('nav-shadow')

      $$('nav > .logo, nav > .nav-toggle').forEach(function (el) {
        setVisibility(el, true, false)
      })
    } else {
      // Not fixed, at bottom
      nav.classList.remove('nav-fixed')
      nav.classList.remove('nav-shadow')

      $$('nav > .logo, nav > .nav-toggle').forEach(function (el) {
        setVisibility(el, false, false)
      })
    }
  }

  if (isMainPage) {
    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    // Scrollspy partly adapted from https://medium.com/p/-3131c114abdc
    document.addEventListener('DOMContentLoaded', function () {
      const ITEMS = [...$$(".nav-item")]
      const SECTIONS = [...$$("main > section")].reverse()
      const THRESHOLD = 340
      var oldIdx = -1

      window.addEventListener("scroll", () => {
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
          windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
          navHeight = nav.clientHeight

        if (scrollPosition > windowHeight - navHeight) {
          setFixedNav(true)
        } else {
          setFixedNav(false)
        }
        const idx = SECTIONS.length - 1 - SECTIONS.findIndex(
          (sec) => scrollPosition > sec.offsetTop - THRESHOLD
        )
        if (idx != oldIdx) {
          ITEMS.forEach((itm) => itm.classList.remove("nav-item-active"))
          ITEMS[idx].classList.add("nav-item-active")
          oldIdx = idx
        }
      });
    }, false);
  } else {
    setFixedNav(true)
  }

  function toggle() {
    if (menuActive) {
      $('#open').classList.remove('icon-active')
      menuActive = false
    } else {
      $('#open').classList.add('icon-active')
      menuActive = true
    }
  }

  // Full screen nav open on click
  $('.nav-icon').addEventListener('click', function () {
    toggle()
    $$('.nav-full, main').forEach(function (el) {
      el.classList.toggle('active')
    })
  })

  // Full screen nav close on click
  $$('.nav-full a').forEach(function (links) {
    links.addEventListener('click', function () {
      toggle()
      $$('.nav-full, main').forEach(function (el) {
        el.classList.toggle('active')
      })
    })
  })

  // Fix logoBig drawing over nav when click on logoSmall while nav open
  $('.logo').addEventListener('click', function () {
    toggle()
    if ($('.nav-full').classList.contains('active')) {
      $$('.nav-full, main').forEach(function (el) {
        el.classList.toggle('active')
      })
    }
  })

  // Disable scroll when full screen nav is open
  $('body').addEventListener('click', function () {
    if ($('.nav-full').classList.contains('active')) {
      $('html').style.overflowY = 'hidden'
    } else {
      $('html').style.overflowY = 'scroll'
    }
  })

  // Mobile browsers viewport height bug fix
  // TODO(kdevo): Verify relevance
  function fullMobileViewport() {
    var element = this,
      viewportHeight = window.innerHeight,
      heightChangeTolerance = 100 // Approximate address bar height in Chrome

    $(window).resize(function () {
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

  $$('header').forEach(function () {
    fullMobileViewport
  })
}
