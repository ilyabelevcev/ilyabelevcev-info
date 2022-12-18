window.addEventListener('DOMContentLoaded', function() {
   document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active');
      document.querySelector('#burger').classList.toggle('open-menu');
      document.querySelector('body').classList.toggle('fixed-page')
   });
})