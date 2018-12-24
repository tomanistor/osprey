(function() {
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),

      modal,

      // Link that opens modal
      links = $$('.gallery-modal-link'),

      // Link that closes modal
      close = $$('.close')[0]

  links.forEach(function(link) {
    link.onclick = function(e) {
      e.preventDefault()
      modal = $(e.target.getAttribute('href'))
      modal.style.display = 'block'
    }
  })

  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    modal.style.display = 'none'
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
})()
