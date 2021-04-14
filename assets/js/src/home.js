(() => {
  // Nav starts at bottom then is fixed to top
  // Logo and hamburger menus fade in and out
  const ITEMS = [...$$(".nav-item")]
  const SECTIONS = [...$$("main > section")].reverse()
  const THRESHOLD = 330
  var oldIdx = -1

  function changeNavHeader(idx) {
      ITEMS.forEach((itm) => { itm.classList.remove("nav-item-active") })
      if (idx < SECTIONS.length) {
        ITEMS[idx].classList.add("nav-item-active")
      }
      oldIdx = idx
  }

  window.addEventListener("scroll", () => { 
    var scrollPosition = window.scrollY || window.pageYOffset
      windowHeight = window.innerHeight
      navHeight = nav.clientHeight

    if (scrollPosition > windowHeight - navHeight) {
      if (!navFixed) { requestAnimationFrame(() => fixNav(true)) }
    } else {
      if (navFixed) { requestAnimationFrame(() => fixNav(false)) }
    }
    const idx = SECTIONS.length - 1 - SECTIONS.findIndex(
      (sec) => scrollPosition > sec.offsetTop - THRESHOLD 
    )
    if (idx != oldIdx) {
      requestAnimationFrame(() => { changeNavHeader(idx) })
    }
  });

  /*
  var header = $('header')
  var oldViewportHeight = 0;
  const heightChangeThreshold = 120; // approximate address bar height fits for Chrome (100) and Brave (104)
  // Viewport size in mobile is impaired by address bar that automatically collapses on scroll.
  // This updates it to the "real dynamic viewport size"
  function updateViewportToInner() {
    // Adapted from: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // let vh = window.innerHeight * 0.01;
    // document.documentElement.style.setProperty('--vh', `${vh}px`);

    // The following is a nasty hack and definitely not perfect: 
    // We only want to change the height if the user directly resizes the window, 
    // hence we aim to ignore "auto-collapse" address bar resize events by only resizing if guessed threshold was exceeded.
    if (Math.abs(oldViewportHeight - window.innerHeight) > heightChangeThreshold) {
      // header.style.maxHeight = window.innerHeight + 'px'
      header.style.height = window.innerHeight + 'px'
      oldViewportHeight = window.innerHeight
    }
  }
  updateViewportToInner()
  window.addEventListener('resize', updateViewportToInner)
  */
})()