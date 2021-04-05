var menuActive = false
var navFixed = false
var nav = $('nav')

function setFixedNav(fixed) {
  navFixed = fixed
  if (fixed) {
    // Fixed to top
    nav.classList.add('nav-fixed')
    nav.classList.add('nav-shadow')

    $$('nav > .logo, nav > .nav-toggle').forEach(function (el) {
      setVisibility(el, true, false)
    })
  } else {
    // Not fixed
    nav.classList.remove('nav-fixed')
    nav.classList.remove('nav-shadow')

    $$('nav > .logo, nav > .nav-toggle').forEach(function (el) {
      setVisibility(el, false, false)
    })
  }
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
// TODO(kdevo): Is this relevant anymore?
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