import vars from '../_vars';

export const isWebp = () => {
  const testWebP = (callback) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

    if (support == true) {
      vars.pageBody.classList.add('webp');
    } else {
      vars.pageBody.classList.add('no-webp');
    }
    });
}
isWebp()
