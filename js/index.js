$(function() {
  $( "#myButton" ).click(function() {
    $( "#myButton" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#myButton" ).removeClass( "onclic" );
      $( "#myButton" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#myButton" ).removeClass( "validate" );
      }, 1250 );
    }
  });