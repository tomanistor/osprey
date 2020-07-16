(function () {
  var realmsg = $('textarea[name=message2]')
  var honeypotmsg = $('textarea[name=message]')

  if (realmsg === null) {
    return;
  }
  setVisibility(realmsg, true)
  setVisibility(honeypotmsg, false)

  // For spam protection, we use "message" as a honeypot field:
  honeypotmsg.removeAttribute("required")

  $('#form-contact').addEventListener('submit', function (e) {
    e.preventDefault()

    // Store form field values
    var name = $('input[name=name]').value,
      email = $('input[name=email]').value,
      subject = $('input[name=_subject]').value,
      matter = $('select[name=matter]').value,
      message = realmsg.value,
      honeypot = honeypotmsg.value

    // AJAX request
    var request = new XMLHttpRequest(),
      data = {
        name: name,
        _replyto: email,
        email: email,
        _subject: subject,
        _matter: matter,
        message: message,
      }
    if (honeypot !== "") {
      data._anti_spam_honeypot = honeypot
    }

    var sending = $('#form-sending'),
      submit = $('#form-submit'),
      thanks = $('#form-thankyou'),
      error = $('#form-error')

    setVisibility(submit, false)
    setVisibility(sending, true)

    // Send to Basin
    request.open('POST', '{{ .Site.Params.Feat.ajaxBasin }}', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')
    // Call function when the state changes
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          // Reset form
          $('#form-contact').reset()

          function thankYouFadeIn() {
            setVisibility(sending, false)
            setVisibility(thanks, true)

            setTimeout(thankYouFadeOut, 6000)
          };

          function thankYouFadeOut() {
            setVisibility(thanks, false)
            setVisibility(submit, true)
          };

          thankYouFadeIn()
        } else {
          // Reset form
          $('#form-contact').reset()

          setVisibility(error, true)
        }
      }
    }
    request.send(JSON.stringify(data))
  })
})()
