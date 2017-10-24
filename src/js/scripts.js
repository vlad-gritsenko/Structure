$(document).ready(function(){
  $('.slider__container').slick({
    prevArrow: '<i class="slider__arrow-left fa fa-arrow-left" aria-hidden="true"></i>',
    nextArrow: '<i class="slider__arrow-right fa fa-arrow-right" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'slider__dots'
  });

  $('.projects__slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.team-slider__slides').slick({
    dots: false,
    infinite: true,
    arrows: false,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });

  $('.feedback__slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 1,
    vertical: true,
    prevArrow: '<i class="f-slider__arrow-up fa fa-arrow-up" aria-hidden="true"></i>',
    nextArrow: '<i class="f-slider__arrow-down fa fa-arrow-down" aria-hidden="true"></i>'
  });
});
