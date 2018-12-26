(function() {
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),

      modal,

      modalBoxes = $$('.modal-box'),

      // Link that opens modal
      openLinks = $$('.gallery-modal-link'),

      // Link that closes modal
      closeLinks = $$('.close')

  // Modal open animation
  function openModal() {
    modalBoxes.forEach(function(box) {
      box.classList.remove('scale-out-center')
    })
  }

  // Modal close animation
  function closeModal() {
    modalBoxes.forEach(function(box) {
      box.classList.add('scale-out-center')
      setTimeout(function() { modal.classList.remove('active') }, 500)
    })
  }

  // Open modal on link click
  openLinks.forEach(function(link) {
    link.onclick = function(e) {
      e.preventDefault()
      modal = $(e.target.getAttribute('href'))
      modal.classList.add('active')
      openModal()
    }
  })

  // Close modal on close link
  closeLinks.forEach(function(link) {
    link.onclick = function(e) {
      e.preventDefault()
      closeModal()
    }
  })

  // Close modal on click outside modal
  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal()
    }
  }

  // Close modal on ESC key press
  document.onkeydown = function(e) {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
})()
