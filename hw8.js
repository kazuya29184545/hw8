$(function () {
  $("#menu").menu();
});

$(function () {
  $("input").checkboxradio();
});

$(function () {
  $("#speed").selectmenu();

  $("#files").selectmenu();

  $("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

  $("#salutation").selectmenu();
});

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );
