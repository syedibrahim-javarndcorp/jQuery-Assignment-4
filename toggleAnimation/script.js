$("#on").click(function () {
  jQuery.fx.off = false;
});
$("#off").click(function () {
  jQuery.fx.off = true;
});
$("#tog").click(function () {
  $(".animate").toggle(2000);
});
