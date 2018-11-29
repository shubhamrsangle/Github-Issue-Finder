window.onload = function(){
  var popupWidth = 700;  // default width of popup in px
  var animationDelay = 250;  // wait time for popup animation to complete
  d=document;
  setTimeout(function(){
    var popupHTML = document.getElementById('button');
    var rawHeight = parseInt(popupHTML.offsetHeight) + 200;

    document.body.style.minWidth = popupWidth + 'px';
    document.body.style.minHeight = rawHeight + 'px';
    window.scroll(0,0);
  }, animationDelay);
};
$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
      setTimeout(function()
      {
          location.href="landing.html";

      },2000);
    }
  });