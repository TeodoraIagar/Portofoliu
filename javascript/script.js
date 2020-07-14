
// Background navbar color change 
$(window).scroll(function(){
  $('nav, h1').toggleClass('scrolled', $(this).scrollTop() > 45);
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
