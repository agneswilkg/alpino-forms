$(document).ready(function() {
  $("#yes").click(function() {
    $("#show-me:hidden").show('slow');
  });
  $("#yes").click(function() {
    if ($('yes').prop('checked') === false) {
      $('#show-me').hide();
    }
  });
  $("#no").click(function() {
    $("#show-me").hide();
  });
});
