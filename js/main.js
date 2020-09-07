$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var mmenuButton = $(".mmenu");
  var navigationMenu = $(".nav");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("mmenu--active");
    navigationMenu.toggleClass("nav--hidden");
  });
});
