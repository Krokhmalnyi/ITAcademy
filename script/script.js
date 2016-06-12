var screenHeight = window.innerHeight;
document.getElementById('singlePage').style.height = screenHeight + 'px'; 
document.getElementById('aboutMe').style.height = screenHeight + 'px';
document.getElementById('contact').style.height = screenHeight + 'px';

window.addEventListener("resize", changeScreen);

function changeScreen(){
	var screenHeight = window.innerHeight;
	document.getElementById('singlePage').style.height = screenHeight + 'px'; 
	document.getElementById('aboutMe').style.height = screenHeight + 'px';
	document.getElementById('contact').style.height = screenHeight + 'px';	
}
$('#btn-send').click(function(e) {
  $.ajax({
      url: "https://formspree.io/s.krokhmalnyi@gmail.com",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>Error!</h1>')
      },
      data: {
             email: email.value,
             message: ok.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1><h1>Your message has been sent</h1>')
  } );
  e.preventDefault();
});


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});