$(function () {
  $(".global-nav__toggle").on("click", function (event) {
    event.preventDefault();
    $(".global-nav").toggleClass("global-nav__opened");
  });

  $(".global-nav__toggle-close").on("click", function (event) {
    event.preventDefault();
    $(".global-nav").toggleClass("global-nav__opened");
  });

  $(".menu__link").on("click", function () {
    let $this = $(this);
    $("#menu a").removeClass("active");
    $this.addClass("active");
  });

  $(".language__link").on("click", function () {
    let $this = $(this);

    $this.addClass("active");
    $(".language__link").not(this).removeClass("active");
  });

  $(".slider-nav__item").on("click", function () {
    let $this = $(this);

    $this.addClass("active");
    $(".slider-nav__item").not(this).removeClass("active");
  });

  $(".basket__btn").on("click", function (event) {
    event.preventDefault();
    $(".window").toggleClass("window-opened");
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
    dots: true,
    infinite: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          vertical: false,
          arrows: false,
        },
      },
    ],
  });

  $(".slider-nav > li").click(function () {
    $(".slider").slick("slickGoTo", $(this).index());
  });

  $("#slider-next").click(function () {
    $(".slider").slick("slickNext");
  });

  $("#slider-prev").click(function () {
    $(".slider").slick("slickPrev");
  });

  $("#slider-next-product").click(function () {
    $(".product__list").slick("slickNext");
  });

  $("#slider-prev-product").click(function () {
    $(".product__list").slick("slickPrev");
  });

  $("#tel").mask("+38 (099) 99-99-999");
});

if (window.innerWidth < 769) {
  mobileOnlySlider();
}

function mobileOnlySlider() {
  $(document).ready(function () {
    $(".product__list").slick({
      swipeToSlide: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      touchMove: true,

      responsive: [
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
}
