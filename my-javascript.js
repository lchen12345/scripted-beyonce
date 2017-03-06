/* global $ */
$(function() {
  $("#hide-contents").click(function() {
    $("#hide-contents, #contents ol").hide(500);
    $("#show-contents").show(500);
  });

  $("#show-contents").click(function() {
    $("#hide-contents, #contents ol").show(500);
    $("#show-contents").hide(500);
  });
  
  $("#edit-earlylife").click(function() {
    let content = prompt("Early life");
    $("#earlylife").text(content);
  });
  
  $("#albumbuttond").click(function() {
    $("#four,#lemonade").hide();
    $("#dangerously").show();

  });
  
  $("#albumbuttonf").click(function() {
    $("#dangerously,#lemonade").hide();
    $("#four").show();

  });
  
  $("#albumbuttonl").click(function() {
    $("#dangerously,#four").hide();
    $("#lemonade").show();

  });
});