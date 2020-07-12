var $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document)

function setVisibility(e, visible) {
  if (visible) {
    e.style.visibility = "visible"
    // e.removeAttribute("hidden")
  } else {
    e.style.visibility = "hidden"
    // e.setAttribute("hidden", true)
  }
  e.classList.add(visible ? 'show' : 'hide')
  e.classList.remove(visible ? 'hide' : 'show')
}

function onLogoClick() {}
