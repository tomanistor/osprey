$('#form-contact').addEventListener('submit', function(e) {
  e.preventDefault();

  // Store form field values
  var name = $("input[name=name]").value;
  var email = $("input[name=email").value;
  var subject = $("input[name=_subject").value;
  var message = $("textarea[name=message]").value;

  // AJAX request
  var request = new XMLHttpRequest();
  var data = {
    name:name,
    _replyto:email,
    email:email,
    _subject:subject,
    message:message,
  }

  // Send to Formspree
  request.open('POST', 'https://formspree.io/{{ .Site.Params.email }}', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  // Call function when the state changes
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {

      // Reset form
      $('#form-contact').reset();

      var submit = $('#form-submit');
      var thanks = $('#form-thankyou');

      function thankYouFadeIn() {
        // Fade out submit button
        submit.style.visibility = 'hidden';
        submit.classList.add('hide');
        submit.classList.remove('show');

        // Fade in thank you message
        thanks.style.visibility = 'visible';
        thanks.classList.add('show');
        thanks.classList.remove('hide');
        setTimeout(thankYouFadeOut, 6000);
      };

      function thankYouFadeOut() {
        // Fade out thank you message
        thanks.style.visibility = 'hidden';
        thanks.classList.add('hide');
        thanks.classList.remove('show');

        // Fade in submit button
        submit.style.visibility = 'visible';
        submit.classList.add('show');
        submit.classList.remove('hide');
      };

      thankYouFadeIn();
    }
  }

  request.send(JSON.stringify(data));
});
