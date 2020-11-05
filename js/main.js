$(function () {
  $('.slider__inner').slick({
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow.png"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev-arrow.png"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    //autoplay: true,
    asNavFor: '.thumbs__inner'
  });
  $('.thumbs__inner').slick({
    slidesToShow: 5,
    //slidesToScroll: 1,
    variableWidth: true,
    asNavFor: '.slider__inner',
    arrows: false,
    dots: false,
    focusOnSelect: true
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });

});