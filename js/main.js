$('.counter').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 100,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});

/***************************************************
# Form
****************************************************/

$('#name').keyup(function (e) { 
  var name = $(this).val();
  $('#nameUser').html('My name is '+name);
});

$('#topic').change(function (e) { 
  var topic = $(this).val();
  $('#topicUser').html(' and I would like to talk about '+topic);
});

$('#notes').keyup(function (e) { 
  var topic = $(this).val();
  $('#notesUser').html(topic);

  var email = $('#email').val();
  $('#msgUser').html('I await your reply, <br>');
  $('#nameUserAss').html(name);
  $('#emailUser').html(email+'<br>');
  $('#emoji').html('&#128516;');
});

/***************************************************
# End Form
****************************************************/

!(function ($) {
    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out"
    });

})(jQuery);