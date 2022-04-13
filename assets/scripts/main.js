$(function () {
  // fixed header
  const header = $("#header");
  const intro = $("#intro");

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

  // smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

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
});
