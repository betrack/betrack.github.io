$( document ).ready(function() {
  // open sidebar navigation(tablet & desktop only)
  $( ".sidebar-toggle" ).click(function() {
    $('.sidebar-navigation').toggleClass( "open" );
  });
});