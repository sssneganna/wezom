$(function () {
  $(window).on("scroll", function () {
    let navHeight = $(window).height() - 200;
    if ($(window).scrollTop() > navHeight) {
      $(".js-nav-fixed").addClass("navigation_fixed");
    } else {
      $(".js-nav-fixed").removeClass("navigation_fixed");
    }
  });

  function openWindow() {
    $(".global-nav").toggleClass("global-nav_opened");
  }

  $(".js-toggle-open").on("click", function (event) {
    event.preventDefault();
    openWindow();
  });

  $(window).on("resize", function () {
    if ($(window).width() < 769) {
      mobileSlider();
    } else {
      $(".js-slider-product").slick("unslick");
    }
  });

  /*if (window.innerWidth < 769) {
    mobileSlider();
  }*/

  function mobileSlider() {
    $(".js-slider-product").slick({
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
  }

  $(".js-active").on("click", "a", function (e) {
    let target = $(this);
    $(e.delegateTarget).find(".active").removeClass("active");
    target.addClass("active");
  });

  $(".js-active-nav-slider").on("click", "li", function (e) {
    let target = $(this);
    $(e.delegateTarget).find(".active").removeClass("active");
    target.addClass("active");
  });

  $(".js-basket-btn").on("click", function (event) {
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

  $(".js-btn-showmore").on("click", showPart).click();

  function showPart() {
    comments.slice(start, (start += 2)).show();
    $(this)[comments.filter(":hidden").length ? "show" : "hide"]();
  }

  $(".js-slider").slick({
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

  $(".js-slider-nav > li").click(function () {
    $(".slider").slick("slickGoTo", $(this).index());
  });

  $(".js-btn-next").click(function () {
    $(".slider").slick("slickNext");
  });

  $(".js-btn-prev").click(function () {
    $(".slider").slick("slickPrev");
  });

  $(".js-btn-next-product").click(function () {
    $(".product__list").slick("slickNext");
  });

  $(".js-btn-prev-product").click(function () {
    $(".product__list").slick("slickPrev");
  });

  $("#tel").mask("+38 (099) 99-99-999");
});
