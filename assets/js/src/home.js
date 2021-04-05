(function () {
  // Nav starts at bottom then is fixed to top
  // Logo and hamburger menus fade in and out
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
        if (!navFixed) { setFixedNav(true) }
      } else {
        if (navFixed) { setFixedNav(false) }
      }
      const idx = SECTIONS.length - 1 - SECTIONS.findIndex(
        (sec) => scrollPosition > sec.offsetTop - THRESHOLD
      )
      if (idx != oldIdx) {
        ITEMS.forEach((itm) => itm.classList.remove("nav-item-active"))
        if (idx < SECTIONS.length) {
          ITEMS[idx].classList.add("nav-item-active")
        }
        oldIdx = idx
      }
    });
  }, false);
})()