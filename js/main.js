$(document).ready(function () {
  /*=== Mobile Menu ===*/
  // Show and hide navigation menu
  var mmenuButton = $("..mmenu__icon");
  var navigationMenu = $(".nav");
  mmenuButton.on("click", function () {
    mmenuButton.toggleClass("fa-times"); //hamburger button
    mmenuButton.toggleClass("fa-bars"); //close button
    navigationMenu.toggleClass("nav--hidden");
  });
});
