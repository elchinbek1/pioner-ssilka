$(document).ready(function () {
  
  $(".burger-menu").click(function () {
    $(this).toggleClass("active"), $(".menu").toggleClass("active");
  });
  const slider = new Swiper(".desc-slider", {
    navigation: {
      nextEl: ".desc-next",
      prevEl: ".desc-prev",
    },
  });
  const slider1 = new Swiper(".mob-slider-1", {
    navigation: {
      nextEl: ".slider-1-next",
      prevEl: ".slider-1-prev",
    },
  });
  const slider2 = new Swiper(".mob-slider-2", {
    navigation: {
      nextEl: ".slider-2-next",
      prevEl: ".slider-2-prev",
    },
  });
  const slider3 = new Swiper(".mob-slider-3", {
    navigation: {
      nextEl: ".slider-3-next",
      prevEl: ".slider-3-prev",
    },
  });
  $(".replace").click(function () {
    $(".barter__image-1 img").toggleClass("active"),
      $(".barter__image-2 img").toggleClass("active");
  });
  class e {
    constructor(e) {
      $(e).find(".tab-content").not(".active").hide(),
        $(e).find(".tab__item").click(function () {
          $(e).find(".tab__item")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active"),
          $(e)
            .find(".tab-content")
            .hide()
            .eq($(this).index())
            .slideDown(500);
        });
    }
  }
  var t = $(".barter");
  for (let i of t) i = new e(i);


});


$(function () {
  var $modal = $('.modal-1');
  var HIDE_CLASS = 'is-hide';

  $('#js-startbtn').on('click', function () {
    $modal.removeClass(HIDE_CLASS);
  });

  $('.js-modal-close').on('click', function () {
    $modal.addClass(HIDE_CLASS);
  });
});

$(function () {
  var $modal = $('.modal-2');
  var HIDE_CLASS = 'is-hide';

  $('#js-startbtn-2').on('click', function () {
    $modal.removeClass(HIDE_CLASS);
  });

  $('.js-modal-close').on('click', function () {
    $modal.addClass(HIDE_CLASS);
  });
});

$(function () {
  var $modal = $('.modal-3');
  var HIDE_CLASS = 'is-hide';

  $('#js-startbtn-3').on('click', function () {
    $modal.removeClass(HIDE_CLASS);
  });

  $('.js-modal-close').on('click', function () {
    $modal.addClass(HIDE_CLASS);
  });
});