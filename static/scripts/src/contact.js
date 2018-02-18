$("#form-contact").on("submit", function(e) {
  e.preventDefault();

  // Store form field values
  var name = $("input[name=name]").val();
  var email = $("input[name=email").val();
  var subject = $("input[name=_subject").val();
  var message = $("textarea[name=message]").val();

  // Send to Formspree
  $.ajax({
    url:"https://formspree.io/{{ .Site.Params.email }}",
    method:"POST",
    data:{
      name:name,
      _replyto:email,
      email:email,
      _subject:subject,
      message:message,
    },
    dataType:"json",
    success:function() {
      console.log("Form successfully sent");
      // Reset form
      $("#form-contact").get(0).reset();
      // Fade out submit button, fade in thank you message, then fade out message and fade in submit button
      $("#form-submit").fadeOut(function(){
        $("#form-thankyou").fadeIn(function(){
          $("#form-thankyou").delay(4000).fadeOut(function(){
            $("#form-submit").fadeIn();
          });
        });
      });
    }
  });

});
