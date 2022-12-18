const swiper = new Swiper('.swiper', {
   // Опции слайдера
   loop: true,
    // По умолчанию(ещё есть 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards')
   effect: 'fade',
   speed: 1500,

   // Пагинация
   pagination: {
      el: '.swiper-pagination',
   },
   // Автовоспроизведение
   autoplay: {
      delay: 2500,
   },
});
