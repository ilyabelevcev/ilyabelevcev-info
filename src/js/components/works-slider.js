import Swiper, { Navigation, Pagination } from 'swiper';

const works_swiper = new Swiper('.skills__swiper', {
  modules: [Navigation, Pagination],
  effect: 'slide',
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".skills__swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.skills__swiper-button-next',
    prevEl: '.skills__swiper-button-prev',
  },
});
