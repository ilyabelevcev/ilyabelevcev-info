import vars from '../_vars';

export const preloadPage = () => {
  window.onload = function() {
    vars.pageBody.classList.add('dis-scroll')
    vars.preloader.classList.add('hide-preloader');
    setInterval(() => {
        vars.preloader.classList.add('preloader-hidden');
        vars.pageBody.classList.remove('dis-scroll');
    }, 1000);
    setInterval(() => {
      vars.pageBody.classList.remove('dis-scroll');
    }, 1000)
  }
}
preloadPage()
