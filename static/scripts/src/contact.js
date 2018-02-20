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
  request.send(JSON.stringify(data));


  // $.ajax({
  //   url:"https://formspree.io/{{ .Site.Params.email }}",
  //   method:"POST",
  //   data:{
  //     name:name,
  //     _replyto:email,
  //     email:email,
  //     _subject:subject,
  //     message:message,
  //   },
  //   dataType:"json",
  //   success:function() {
  //     console.log("Form successfully sent");
  //     // Reset form
  //     $("#form-contact").get(0).reset();
  //     // Fade out submit button, fade in thank you message, then fade out message and fade in submit button
  //     $("#form-submit").fadeOut(function(){
  //       $("#form-thankyou").fadeIn(function(){
  //         $("#form-thankyou").delay(4000).fadeOut(function(){
  //           $("#form-submit").fadeIn();
  //         });
  //       });
  //     });
  //   }
  // });

});
