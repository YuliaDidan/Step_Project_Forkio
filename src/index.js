import $ from "jquery";
import slick from 'slick-carousel';

document.addEventListener('DOMContentLoaded', init);

function init() {
  const d = document;
  const page = d.getElementById('homepage') || d.getElementById('about');
  const id = page.getAttribute('id');

  switch (id) {
    case 'homepage': {
      console.log('Hello, from Homepage');
      break;
    }
    case 'about': {
      console.log('Hello, from About page');
      break;
    }
    default: {
      // ...
    }
  }
}
// Christina
$(document).ready(function() {
  //show header-nav
  $('.menu-btn').click(function(evt){
    evt.preventDefault(); 
    
    let menu = $('.header-nav');

    $('.header .mobile').toggleClass('d-none');
    $('.sandwich, .cross').toggleClass('close');

    // add animation
    if(menu.is(':visible')) {
      menu.slideDown('slow');
    } else {
      menu.slideUp('slow');
    }
  });

  //Add class active in header-menu__link
  $(".header-nav__item").on("click", function() {
    $(".header-nav__item.active").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".pricing-card").on("click", function() {
    $(".pricing-card.active").removeClass("active");
    $(this).toggleClass("active");
  });


});


$(document).ready(function(){
  $('.testimonials__slider').slick({
    swipeToSlide: true,
    prevArrow: $('.testimonials__slider-btn--prev'),
    nextArrow: $('.testimonials__slider-btn--next')
  });
});