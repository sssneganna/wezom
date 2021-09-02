$(function () {
  $(".global-nav__toggle").on("click", function (event) {
    event.preventDefault();
    $(".global-nav").toggleClass("global-nav__opened");
  });

  $(".menu__link").on("click", function () {
    let $this = $(this);
    $("#menu a").removeClass("active");
    $this.addClass("active");
  });

  $(".language__btn").on("click", function () {
    let $this = $(this);

    $this.addClass("active");
    $(".language__btn").not(this).removeClass("active");
  });

  $(".slider-nav__item").on("click", function () {
    let $this = $(this);

    $this.addClass("active");
    $(".slider-nav__item").not(this).removeClass("active");
  });

  $(".basket-box__btn-basket").on("click", function (event) {
    event.preventDefault();
    $(".basket-box__window").toggleClass("basket-box__window-opened");
  });

  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this),
      blockId = $this.data("collapse");
    $this.toggleClass("active");
  });

  let start = 0,
    comments = $(".reviews__content");

  $(".reviews__btn-showmore").on("click", showPart).click();

  function showPart() {
    comments.slice(start, (start += 2)).show();
    $(this)[comments.filter(":hidden").length ? "show" : "hide"]();
  }

  $(".slider").slick({
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".slider-nav > div").click(function () {
    $(".slider").slick("slickGoTo", $(this).index());
  });

  $("#tel").mask("+38 (099) 99-99-999");
});
