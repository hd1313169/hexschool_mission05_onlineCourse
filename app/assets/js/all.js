$(function() {
  console.log('Hello Bootstrap5');
});

var lessonTagSwiper = new Swiper(".lessonTag-swiper", {
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

const reviewSwiper = new Swiper('.review-swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.review-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.review-swiper-button-next',
    prevEl: '.review-swiper-button-prev',
  },
});

var lessonTypeSwiper = new Swiper(".lessonType-swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 6,
      spaceBetween: 16
    }
  },


autoplay: {
  delay: 2000,
},
});

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true,
  language: 'zh-TW',
  format: "yyyy/mm/dd",
}); 