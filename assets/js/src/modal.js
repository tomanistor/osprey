(function () {
  var ANIMATION_TIME = 500
  var modal,
    modalBoxes = $$('.modal-box'),
    // Link that opens modal
    openLinks = $$('.gallery-modal-link'),
    // Link that closes modal
    closeLinks = $$('.close')

  // Modal open animation
  function openModal() {
    modalBoxes.forEach(function (box) {
      box.classList.add('scale-in-center')
      box.classList.remove('scale-out-center')
    })
  }

  // Modal close animation
  function closeModal() {
    modalBoxes.forEach(function (box) {
      box.classList.remove('scale-in-center')
      box.classList.add('scale-out-center')
      setTimeout(function () { modal.classList.remove('active') }, ANIMATION_TIME)
    })
  }

  {{ if .Site.Params.Feat.useTermynal -}}
    var terms = {};
    var termOptions = {};
    {{ range where .Site.RegularPages "Section" "gallery" }}
    {{ if .Params.terminal -}}
      {{ if .Params.terminal.options -}}
    termOptions["{{ .File.BaseFileName }}"] = JSON.parse('{{ .Params.terminal.options | jsonify }}')
    {{- else -}}
    termOptions["{{ .File.BaseFileName }}"] = {}
      {{- end }}
    {{- end }}
    {{- end }}
  {{- end }}


  function open(modalElement) {
    modal = modalElement
    modal.classList.add('active')
    openModal()

    {{ if .Site.Params.Feat.useTermynal -}}
    var termKey = modal.getAttribute('id').replace('modal-', '')
    var term = $(`#term-${termKey}`)
    if (term !== null && typeof terms[termKey] === 'undefined') {
      var options = termOptions[termKey]
      options.onExitCommand = function () {
        term.classList.add('scale-out-center')
        setTimeout(function () {
          $(`#content-${termKey}`).removeAttribute("hidden")
          term.setAttribute("hidden", true)
        }, ANIMATION_TIME + 10)
      }
      terms[termKey] = new Termynal(term, options)
    }
    {{- end }}
  }


  // Open modal on link click
  openLinks.forEach(function (link) {
    link.onclick = function (e) {
      e.preventDefault()  // omits modal history if uncommented
      open($(`#modal-${e.target.getAttribute('href').substr(1)}`))
    }
    function handleModalAnchorScroll() {
      const loc = window.location.href
      const seg = loc.substring(loc.lastIndexOf('/') + 1)
      if (link.getAttribute('href') == seg) {
        function waitForArrival() {
          // TODO(kdevo): Add check if actually arrived at gallery item
          open($(`#modal-${link.getAttribute('href').substr(1)}`))
        }
        setTimeout(waitForArrival, ANIMATION_TIME * 2)
      }
    }
    handleModalAnchorScroll()
  })

  // Close modal on close link
  closeLinks.forEach(function (link) {
    link.onclick = function (e) {
      e.preventDefault()
      closeModal()
    }
  })

  // Close modal on click outside modal
  window.onclick = function (e) {
    if (e.target === modal) {
      closeModal()
    }
  }

  // Close modal on ESC key press
  document.onkeydown = function (e) {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
})()
