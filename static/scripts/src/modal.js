(function() {
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),

      modal,

      // Link that opens modal
      openLinks = $$('.gallery-modal-link'),

      // Link that closes modal
      closeLinks = $$('.close')

  // Open modal on link click
  openLinks.forEach(function(link) {
    link.onclick = function(e) {
      e.preventDefault()
      modal = $(e.target.getAttribute('href'))
      modal.style.display = 'flex'
    }
  })

  // Close modal on close link
  closeLinks.forEach(function(link) {
    link.onclick = function(e) {
      e.preventDefault()
      modal.style.display = 'none'
    }
  })

  // Close modal on click outside modal
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
})()
