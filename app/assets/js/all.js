$(function() {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".lessonTag-swiper", {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 8,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 6,
        spaceBetween: 16
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 10,
        spaceBetween: 16
      }
    },
  

  autoplay: {
    delay: 2000,
  },
});

const swiper = new Swiper('.review-swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});