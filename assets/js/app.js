// @ts-nocheck
// accordion
document.querySelectorAll('.accordion_button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('accordion_button_active');
  });
});

// @ts-nocheck
$('.partner_slider').slick({
  dots: false,
  arrows: true,
  nextArrow: '.arrownext',
  prevArrow: '.arrowprev',
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.video_slider').slick({
  dots: false,
  nextArrow: '.arrow_next',
  prevArrow: '.arrow_prev',
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.people_slider').slick({
  arrows: false,
  dots: true,
  autoplay: true,
});

$('.studies_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:
    '<span class="nextarrow"><i class="fas fa-chevron-right"></i></span>',
  prevArrow:
    '<span class="prevarrow"><i class="fas fa-chevron-left"></i></span>',
});

$('.security_slider').slick({
  dots: false,
  arrows: true,
  nextArrow:
    '<span class="nextarrow"><i class="fas fa-chevron-right"></i></span>',
  prevArrow:
    '<span class="prevarrow"><i class="fas fa-chevron-left"></i></span>',
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(function () {
  'use strict';

  $(window).scroll(function () {
    var scrollValue = $(this).scrollTop();

    //top button fade in fade out
    // if (scrollValue >= 300) {
    //   $('.top-btn').fadeIn();
    // } else {
    //   $('.top-btn').fadeOut();
    // }

    //header fixed
    if (scrollValue >= 200) {
      $('.header').addClass('translate-top');
    } else {
      $('.header').removeClass('translate-top');
    }

    //header fixed
    if (scrollValue >= 300) {
      $('.header').addClass('position-fixed');
      $('.dark-logo').addClass('d-block');
      $('.white-logo').addClass('d-none');
    } else {
      $('.header').removeClass('position-fixed');
      $('.dark-logo').removeClass('d-block');
      $('.white-logo').removeClass('d-none');
    }

    //banner space adjust
    if (scrollValue >= 300) {
      $('.need_margin').addClass('top-margin');
    } else {
      $('.need_margin').removeClass('top-margin');
    }
  });
});
