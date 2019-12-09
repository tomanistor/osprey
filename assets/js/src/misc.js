var $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document)

function setVisibility(e, visible) {
  e.classList.add(visible ? 'show' : 'hide')
  e.classList.remove(visible ? 'hide' : 'show')
  if (visible) {
    e.style.visibility = "visible"
    e.removeAttribute("hidden")
  } else {
    e.style.visibility = "hidden"
    e.setAttribute("hidden", true)
  }
}

function onLogoClick() {}

// Partly adapted from https://medium.com/p/-3131c114abdc
document.addEventListener('DOMContentLoaded', function(){
  const ITEMS = [...$$(".nav-item")]
  const SECTIONS = [...$$("main > section")].reverse()
  const THRESHOLD = 340
  var oldIdx = -1

  window.addEventListener("scroll", () => {
    const idx = SECTIONS.length - SECTIONS.findIndex(
      (sec) => window.scrollY > sec.offsetTop - THRESHOLD
    ) - 1
    if (idx != oldIdx) {
      ITEMS.forEach((itm) => itm.classList.remove("nav-item-active"))
      ITEMS[idx].classList.add("nav-item-active")
      oldIdx = idx
    }
  });
}, false);

// github = (function () {
  // req = new XMLHttpRequest()
  // req.open("GET", "https://api.github.com/repos/${repo}", true);
  // req.send();
  // req.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //   }
  // };
// })