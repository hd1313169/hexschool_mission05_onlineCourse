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


// Swiper
const mySwiper = new Swiper('.mySwiper', {
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