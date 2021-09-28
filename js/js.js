$(function () {
  $(window).on("scroll", function () {
    let navHeight = $(window).height() - 200;
    if ($(window).scrollTop() > navHeight) {
      $(".js-nav-fixed").addClass("navigation_fixed");
    } else {
      $(".js-nav-fixed").removeClass("navigation_fixed");
    }
  });

  $(window).on("resize", function () {
    if (window.matchMedia("(max-width: 769px)").matches) {
      mobileOnlySlider();
    } else {
      $(".js-slider-product").slick("unslick");
    }
  });

  if (window.innerWidth < 769) {
    mobileOnlySlider();
  }

  function mobileOnlySlider() {
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

  $(".js-nav-toggle").on("click", function (event) {
    event.preventDefault();
    $(".global-nav").toggleClass("global-nav_opened");
  });

  $(".js-nav-toggle-close").on("click", function (event) {
    event.preventDefault();
    $(".global-nav").toggleClass("global-nav_opened");
  });

  function addActiveClass(t) {
    $(t).toggleClass("active");
  }

  $(".js-active").on("click", function (event) {
    let target = event.target.closest("a");
    if (!target) return;
    addActiveClass(target);
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
