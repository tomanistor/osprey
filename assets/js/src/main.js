(function() {
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),

      menuActive = false

  // Nav is fixed to top
  $('nav').classList.add('nav-fixed')
  $$('nav > .logo, nav > .nav-toggle').forEach(function(el) {
    el.style.visibility = 'visible'
    el.classList.add('show')
    el.classList.remove('hide')
  })

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
})()
