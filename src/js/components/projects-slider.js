import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper(".projects__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // mobile + tablet - 320-768
    600: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    769: {
      slidesPerView: 2,
    },
    // desktop >= 768
    1221: {
      slidesPerView: 3,
    }
  }
});


