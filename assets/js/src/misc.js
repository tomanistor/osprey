var $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document)

/**
 * 
 * @param {Element} e Element for DOM modification 
 * @param {boolean} visible Self-explanatory. true = visible, false = hidden
 * @param {boolean} useAttr Using visibility attribute will prevent smooth navbar transition 
 */
function setVisibility(e, visible, useAttr = true) {
  if (visible) {
    e.style.visibility = "visible"
    if (useAttr) {
      e.removeAttribute("hidden")
    }
  } else {
    e.style.visibility = "hidden"
    if (useAttr) {
      e.setAttribute("hidden", true)
    }
  }
  e.classList.add(visible ? 'show' : 'hide')
  e.classList.remove(visible ? 'hide' : 'show')
}

function onLogoClick() { }
