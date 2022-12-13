import vars from "../_vars";

export const burgerOpen = () => {
    vars.burger.addEventListener('click', function(){
        vars.burger.classList.toggle('burger--active')
        vars.pageBody.classList.toggle('body-hidden')
        vars.menu.classList.toggle('active');
    })
}
burgerOpen()
