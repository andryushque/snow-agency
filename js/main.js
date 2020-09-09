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
  function getLight() {
    $(".header-scroll").addClass("header--light");
    $(".header-scroll .logo--light").removeClass("logo--visible");
    $(".header-scroll .logo--dark").addClass("logo--visible");
    $(".header-scroll .nav__link").removeClass("nav__link--light");
    $(".header-scroll .nav__link").addClass("nav__link--dark");
    $(".header-scroll .nav").removeClass("nav--dark");
    $(".header-scroll .nav").addClass("nav--light");
    $(".header-scroll .mmenu__icon").removeClass("mmenu__icon--light");
    $(".header-scroll .mmenu__icon").addClass("mmenu__icon--dark");
  }
  function getDark() {
    $(".header-scroll").removeClass("header--light");
    $(".header-scroll .logo--light").addClass("logo--visible");
    $(".header-scroll .logo--dark").removeClass("logo--visible");
    $(".header-scroll .nav__link").addClass("nav__link--light");
    $(".header-scroll .nav__link").removeClass("nav__link--dark");
    $(".header-scroll .nav").addClass("nav--dark");
    $(".header-scroll .nav").removeClass("nav--light");
    $(".header-scroll .mmenu__icon").removeClass("mmenu__icon--dark");
    $(".header-scroll .mmenu__icon").addClass("mmenu__icon--light");
  }
  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        getLight();
      } else {
        getDark();
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
  $(".testimonials .owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
  });

  // Slider for clients section
  $(".clients .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Slider for blog section
  $(".blog .owl-carousel").owlCarousel({
    dots: true,
    dotsEach: 1,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});
