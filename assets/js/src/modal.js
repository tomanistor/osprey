(function() {
  var ANIMATION_TIME = 500
  var modal,
        modalBoxes = $$('.modal-box'),
        // Link that opens modal
        openLinks = $$('.gallery-modal-link'),
        // Link that closes modal
        closeLinks = $$('.close')



  // Modal open animation
  function openModal() {
    modalBoxes.forEach(function(box) {
      box.classList.add('scale-in-center')
      box.classList.remove('scale-out-center')
    })
  }

  // Modal close animation
  function closeModal() {
    modalBoxes.forEach(function(box) {
      box.classList.remove('scale-in-center')
      box.classList.add('scale-out-center')
      // Remove active class from modal after modal-box animation is done
      // box.addEventListener('animationend', function() {
      //   console.log('animation ended')
      //   modal.classList.remove('active')
      // })
      setTimeout(function() { modal.classList.remove('active') }, ANIMATION_TIME)
    })
  }

  function open(modalElement) {
    modal = modalElement
    modal.classList.add('active')
    openModal()
      
    {{ if .Site.Params.Feat.useTermynal -}}
      var term = $(`#term-${modal.getAttribute('id')}`)
      if (term !== null && typeof terms[modal.getAttribute('id')] === 'undefined') {
        var termOptions = JSON.parse('{{ .Site.Data.term | jsonify }}')
        termOptions.onExitCommand = function() { 
          term.classList.add('scale-out-center')
          setTimeout(function() { 
            $(`#content-${modal.getAttribute('id')}`).removeAttribute("hidden")
            term.setAttribute("hidden", true)
          }, ANIMATION_TIME + 10)
        }
        terms[modal.getAttribute('id')] = new Termynal(term, termOptions)
      }
    {{- end }}
  }

  var terms = {};

  // Open modal on link click
  openLinks.forEach(function(link) {
    link.onclick = function(e) {
        e.preventDefault()
        open($(e.target.getAttribute('href')))
    }
    const loc = window.location.href
    const seg = loc.substring(loc.lastIndexOf('/') + 1)
    if (link.getAttribute('href') == seg) {
      console.log($("#work"))
      console.log("SCROLL")
      $("#work").scrollIntoView()
      open($(link.getAttribute('href')))
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
  window.onclick = function(e) {
    if (e.target === modal) {
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
