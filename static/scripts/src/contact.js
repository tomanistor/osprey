(function() {
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document)

  $('#form-contact').addEventListener('submit', function(e) {
    e.preventDefault()

    // Store form field values
    var name = $('input[name=name]').value,
        email = $('input[name=email').value,
        subject = $('input[name=_subject').value,
        message = $('textarea[name=message]').value,

        // AJAX request
        request = new XMLHttpRequest(),
        data = {
          name: name,
          _replyto: email,
          email: email,
          _subject: subject,
          message: message
        }

    // Send to Formspree or Basin
    request.open('POST', '{{ if .Site.Params.ajaxFormspree }}https://formspree.io/{{ .Site.Params.email }}{{ else if .Site.Params.ajaxBasin }}{{ .Site.Params.ajaxBasin }}.json{{ end }}', true)
    request.setRequestHeader('{{ if .Site.Params.ajaxFormspree }}Content-Type{{ else if .Site.Params.ajaxBasin }}Accept{{ end }}', 'application/json; charset=UTF-8')
    // Call function when the state changes
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
      // Reset form
        $('#form-contact').reset()

        var submit = $('#form-submit'),
            thanks = $('#form-thankyou')

        function thankYouFadeIn() {
          // Fade out submit button
          submit.style.visibility = 'hidden'
          submit.classList.add('hide')
          submit.classList.remove('show')

          // Fade in thank you message
          thanks.style.visibility = 'visible'
          thanks.classList.add('show')
          thanks.classList.remove('hide')
          setTimeout(thankYouFadeOut, 6000)
        };

        function thankYouFadeOut() {
          // Fade out thank you message
          thanks.style.visibility = 'hidden'
          thanks.classList.add('hide')
          thanks.classList.remove('show')

          // Fade in submit button
          submit.style.visibility = 'visible'
          submit.classList.add('show')
          submit.classList.remove('hide')
        };

        thankYouFadeIn()
      }
    }

    request.send(JSON.stringify(data))
  })
})()
