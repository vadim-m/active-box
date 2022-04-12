$(function () {
  const header = $("#header");
  const intro = $("#intro");

  let introHeight = intro.innerHeight();
  let scrollPosition = $(window).scrollTop();

  $(window).on("scroll load", function () {
    scrollPosition = $(this).scrollTop();

    if (scrollPosition > introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});
