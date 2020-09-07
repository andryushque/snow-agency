$(document).ready(function () {
  /*=== Mobile Menu ===*/
  // Show and hide navigation menu
  var mmenuButton = $(".mmenu");
  var mmenuButtonIcon = $(".mmenu__icon");
  var navigationMenu = $(".nav");
  mmenuButton.on("click", function () {
    mmenuButtonIcon.toggleClass("fa-times"); //hamburger button
    mmenuButtonIcon.toggleClass("fa-bars"); //close button
    navigationMenu.toggleClass("nav--hidden");
  });

  /*=== Fixed Header Color ===*/
  // Change header color on scroll
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("header--light");
        $(".logo--light").removeClass("logo--visible");
        $(".logo--dark").addClass("logo--visible");
        $(".nav__link").removeClass("nav__link--light");
        $(".nav__link").addClass("nav__link--dark");
        $(".nav").removeClass("nav--dark");
        $(".nav").addClass("nav--light");
        $(".mmenu__icon").removeClass("mmenu__icon--light");
        $(".mmenu__icon").addClass("mmenu__icon--dark");
      } else {
        $(".header").removeClass("header--light");
        $(".logo--light").addClass("logo--visible");
        $(".logo--dark").removeClass("logo--visible");
        $(".nav__link").addClass("nav__link--light");
        $(".nav__link").removeClass("nav__link--dark");
        $(".nav").addClass("nav--dark");
        $(".nav").removeClass("nav--light");
        $(".mmenu__icon").removeClass("mmenu__icon--dark");
        $(".mmenu__icon").addClass("mmenu__icon--light");
      }
    });
  });
});
