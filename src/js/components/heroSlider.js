import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper';

export const swiper = new Swiper('.swiper', {
  modules: [ Pagination, Autoplay, EffectFade],
  effect: 'fade',
  speed: 3500,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1500,
  },
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});
