// Navigation

$('.nav-toggle').click(function(){
  $('.nav-top ul').toggleClass('open');
});


// Slick

$(document).ready(function(){
  $('.hero-slider').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '35px',
    slidesToShow: 2,
    initialSlide: 2,
    cssEase: 'linear',
    autoplaySpeed: 5500,
    responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '25px',
      slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: false,
      centerPadding: '30px',
      slidesToShow: 1
    }
  }
]
  });
});
