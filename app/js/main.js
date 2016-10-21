$( document ).ready(function() {
  //init WOW for scroll animations
  new WOW().init();

  // open sidebar navigation(tablet & desktop only)
  $( ".sidebar-toggle" ).click(function() {
    $('.sidebar-navigation').toggleClass( "open" );
  });
  
  //class for filled inputs
  $('input').blur(function() {
    // check if the input has any value (if we've typed into it)
    if ($(this).val())
      $(this).addClass('used');
    else
      $(this).removeClass('used');
  });

  // smooth scroll for links in nav
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          var navbarHeight = $('.navbar-header').height();
          $('html, body').animate({
            scrollTop: target.offset().top - navbarHeight
          }, 1000);
          return false;
        }
      }
    });
  });
});