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

  /*=== Smooth Scrolling to Anchor ===*/
  // Select all links with hashes and remove not anchor links
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /*=== Owl carousel ===*/
  // Slider for testimonials section
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
  });
});
