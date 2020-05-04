
$(function () {
    $('#reused_form').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.text('Sending ...');
        });
    });

document.getElementById('submit').addEventListener('click', event => {
    const leadName = document.getElementById('client_name').value;
    const leadEmail = document.getElementById('client_email').value;
    const leadYear = document.getElementById('inputState').value;
  
  if(leadYear != "" && leadEmail != "" && leadName != "") {
    
    firebase.database().ref('students').once('value', snapshot => {
      var totalLeads = snapshot.numChildren();
      totalLeads++;
  
      firebase.database().ref('students').child(totalLeads).set({
        name: leadName,
        year: leadYear,
        email: leadEmail,
      });
      $('.contact-form').hide();
      $('.message-sent-success').show();
      alert('Student Info Saved');
  
    }, function(error) {
      console.log(error);
    });
  } else {
    alert('Please fill all the fields.');
    }
  });
});
