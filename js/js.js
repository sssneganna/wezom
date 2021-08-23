$(function () {
  $(".global-nav_toggle").on("click", function (event) {
    event.preventDefault();
    $(".global-nav").toggleClass("global-nav_opened");
  });

  $(".menu_link").on("click", function () {
    let $this = $(this);
    $("#menu a").removeClass("active");
    $this.addClass("active");
  });

  $(".info_btn-language").on("click", function () {
    let $this = $(this);

    $this.addClass("active");
    $(".info_btn-language").not(this).removeClass("active");
  });

  $(".slider-nav_item").on("click", function () {
    let $this = $(this);

    $this.addClass("active");
    $(".slider-nav_item").not(this).removeClass("active");
  });
 
  
  $(".basket-box_btn-basket").on("click", function (event) {
    event.preventDefault();
    $(".basket-box_window").toggleClass("basket-box_window_opened");
  });

  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this),
      blockId = $this.data("collapse");
    $this.toggleClass("active");
  });

  let start = 0,
    comments = $(".reviews_content");

  $(".reviews_btn-showmore").on("click", showPart).click();

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
