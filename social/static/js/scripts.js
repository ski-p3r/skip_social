function PageScroll() {
  $(".scroll-tiger").on("click", function (s) {
    var e = $(this);
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $(e.attr("href")).offset().top - 0 },
        1500,
        "easeInOutExpo"
      ),
      $(".overlay-section").removeClass("active"),
      s.preventDefault();
  });
}
$(document).ready(function () {
  "use strict";
  PageScroll(),
    $(".preloader").length > 0 && $(".preloader").delay(200).fadeOut(500),
    $(window).on("load", function () {
      setInterval(function () {
        $(".preloader-wrap").fadeOut(300);
      }, 400),
        setInterval(function () {
          $("body").addClass("loaded");
        }, 600);
    }),
    $(".carousel-card").owlCarousel({
      loop: !1,
      margin: 10,
      nav: !1,
      autoplay: !1,
      dots: !1,
      autoWidth: !0,
    }),
    $(".category-card").owlCarousel({
      loop: !1,
      margin: 7,
      nav: !0,
      autoplay: !1,
      dots: !1,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      autoWidth: !0,
    }),
    $(".banner-slider").owlCarousel({
      loop: !0,
      margin: 15,
      nav: !0,
      autoplay: !1,
      dots: !0,
      navText: [
        "<i class='ti-angle-left icon-nav'></i>",
        "<i class='ti-angle-right icon-nav'></i>",
      ],
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1200: { items: 1 } },
    }),
    $(".brand-slider").owlCarousel({
      loop: !0,
      margin: 15,
      nav: !1,
      autoplay: !1,
      dots: !1,
      items: 5,
      responsive: { 0: { items: 2 }, 600: { items: 3 }, 1200: { items: 5 } },
    }),
    $(".product-slider").owlCarousel({
      loop: !0,
      margin: 3,
      autoplay: !0,
      dots: !1,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1200: { items: 2 } },
    }),
    $(".feedback-slider").owlCarousel({
      loop: !0,
      margin: 15,
      nav: !0,
      autoplay: !1,
      dots: !1,
      items: 5,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 3 } },
    }),
    $(".feedback-slider2").owlCarousel({
      loop: !0,
      margin: 15,
      nav: !0,
      autoplay: !1,
      dots: !1,
      items: 5,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 2 } },
    }),
    $(".story-slider").owlCarousel({
      loop: !0,
      margin: 0,
      nav: !0,
      autoplay: !0,
      dots: !0,
      touchDrag: !0,
      navText: [
        "<i class='ti-angle-left icon-nav'></i>",
        "<i class='ti-angle-right icon-nav'></i>",
      ],
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1200: { items: 1 } },
    }),
    $(".product-slider-6").owlCarousel({
      loop: !0,
      margin: 15,
      nav: !1,
      autoplay: !1,
      dots: !1,
      items: 5,
      responsive: { 0: { items: 2 }, 600: { items: 3 }, 1200: { items: 6 } },
    }),
    $(window).on("load", function () {
      $("#Modalstories").modal("show");
    }),
    $(".emoji-bttn").on("click", function () {
      return $(this).parent().find(".emoji-wrap").toggleClass("active"), !1;
    }),
    $(".add-wishlist").on("click", function () {
      return (
        $(this).toggleClass("bg-greylight bg-danger"),
        $(this).find("i").toggleClass("text-grey-900 text-white"),
        !1
      );
    }),
    $(".question-div .question-ans").on("click", function () {
      return (
        $(".question-ans").removeClass("active"), $(this).addClass("active"), !1
      );
    }),
    $(".question-div .question-ans").on("click", function () {
      return (
        $(".question-ans").removeClass("active"), $(this).addClass("active"), !1
      );
    }),
    $(".next-bttn").on("click", function () {
      var s = $(this).attr("data-question");
      return (
        $(".question-div .card-body").fadeOut(0),
        $(".question-div #" + s).fadeIn(500),
        !1
      );
    }),
    $(".dropdown-menu-icon").on("click", function () {
      $(".dropdown-menu-settings").toggleClass("active");
    }),
    $(".menu-search-icon").on("click", function () {
      $(".app-header-search").addClass("show");
    }),
    $(".searchbox-close").on("click", function () {
      $(".app-header-search").removeClass("show");
    }),
    $(".switchcolor").on("click", function () {
      $(this).addClass("active"),
        $(".backdrop").addClass("active"),
        $(".switchcolor-wrap").addClass("active");
    }),
    $(".sheet-close,.backdrop").on("click", function () {
      $(".switchcolor").removeClass("active"),
        $(".backdrop").removeClass("active"),
        $(".switchcolor-wrap").removeClass("active");
    }),
    $("#darkmodeswitch").on("change", function () {
      this.checked
        ? $("body").addClass("theme-dark")
        : $("body").removeClass("theme-dark");
    }),
    $(".chat-active-btn").on("click", function () {
      return (
        $(".right-chat").toggleClass("active-sidebar"),
        $(".main-content").toggleClass("right-chat-active"),
        !1
      );
    }),
    $(window).resize(function () {
      $(this).width() < 1600
        ? $(".right-chat").removeClass("active-sidebar")
        : $(".right-chat").addClass("active-sidebar");
    }),
    $(window).width() < 1600
      ? $(".right-chat").removeClass("active-sidebar")
      : $(".right-chat").addClass("active-sidebar"),
    $(window).scroll(function () {
      $(this).scrollTop() > 10
        ? $(".scroll-header").addClass("bg-white shadow-xss")
        : $(".scroll-header").removeClass("bg-white shadow-xss");
    }),
    $(window).scroll(function () {
      $(this).scrollTop() > 10
        ? $(".middle-sidebar-header").addClass("scroll")
        : $(".middle-sidebar-header").removeClass("scroll");
    }),
    $(".nav-menu").on("click", function () {
      $(this).toggleClass("active"), $(".navigation").toggleClass("nav-active");
    }),
    $(".model-popup-chat").on("click", function () {
      return $(".modal-popup-chat").toggleClass("d-block"), !1;
    }),
    $(".modal-popup-chat a").on("click", function () {
      return $(".modal-popup-chat").removeClass("d-block"), !1;
    }),
    $(".close-nav").on("click", function () {
      return $(".navigation").removeClass("nav-active"), !1;
    }),
    $(".toggle-menu-color input").on("change", function () {
      this.checked
        ? $(".navigation").addClass("menu-current-color")
        : $(".navigation").removeClass("menu-current-color");
    }),
    $(".toggle-menu input").on("change", function () {
      this.checked
        ? $(".navigation,.main-content").addClass("menu-active")
        : $(".navigation,.main-content").removeClass("menu-active");
    }),
    $(".toggle-screen input").on("change", function () {
      this.checked
        ? $("body").addClass("theme-full")
        : $("body").removeClass("theme-full");
    }),
    $(".toggle-dark input").on("change", function () {
      this.checked
        ? $("body").removeClass("theme-dark")
        : $("body").addClass("theme-dark");
    }),
    $('input[name="color-radio"]').on("change", function () {
      this.checked &&
        ($("body").removeClass(
          "color-theme-teal color-theme-cadetblue color-theme-pink color-theme-deepblue color-theme-blue color-theme-red color-theme-black color-theme-gray color-theme-orange color-theme-yellow color-theme-green color-theme-white color-theme-brown color-theme-darkgreen color-theme-deeppink color-theme-darkorchid"
        ),
        $("body").addClass("color-theme-" + $(this).val()));
    });
});
