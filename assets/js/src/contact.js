(() => {
  var realmsg = $('textarea[name=message2]')
  // For spam protection, we use "message" as a honeypot field:
  var honeypotmsg = $('textarea[name=message]')

  if (realmsg === null) {
    return;
  }
  setVisibility(realmsg, true)
  setVisibility(honeypotmsg, false)

  honeypotmsg.removeAttribute("required")

  $('#form-contact').addEventListener('submit', (e) => {
    e.preventDefault()

    var email = $('input[name=email]').value
    // AJAX request
    var request = new XMLHttpRequest(),
      data = {
        name: $('input[name=name]').value,
        _replyto: email,
        email: email,
        _subject: $('input[name=_subject]').value,
        message: realmsg.value,
      }
    var honeypot = honeypotmsg.value
    if (honeypot !== "") {
      data._anti_spam_honeypot = honeypot
    }
    matter = $('select[name=matter]')
    if (matter) {
      data._matter = matter.value
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
    request.onreadystatechange = () => {
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
          setVisibility(sending, false)
          setVisibility(error, true)
        }
      }
    }
    request.send(JSON.stringify(data))
  })
})()