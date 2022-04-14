$(function () {
  // Page Elements
  const header = $("#header");
  const intro = $("#intro");
  const burger = $("#burger-menu");
  const nav = $("#nav");
  const slider = $("#reviews-slider");

  // Fixed Header
  let introHeight = intro.innerHeight();
  let scrollPosition = $(window).scrollTop();

  $(window).on("scroll load", function () {
    scrollPosition = $(this).scrollTop();

    // 64 - это высота хедера с position fixed
    if (scrollPosition >= introHeight - 64) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // Smooth Scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    nav.removeClass("active");
    burger.toggleClass("active");

    let element = $(this).data("scroll");
    let elementOffset = $(element).offset().top;

    $("html, body").animate(
      {
        // 64 - это высота хедера с position fixed
        scrollTop: elementOffset - 64,
      },
      "fast",
      "linear"
    );
  });

  // Toggle Navigation on Mobile Devices
  burger.on("click", function (event) {
    event.preventDefault();

    burger.toggleClass("active");
    nav.toggleClass("active");
  });

  // Reviews-slider Slick: https://kenwheeler.github.io/slick
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});
