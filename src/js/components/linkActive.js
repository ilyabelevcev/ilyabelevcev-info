import vars from '../_vars';

export const activatedPage = () => {

  if(vars.pageBody.classList.contains('main')) {
    vars.mainActive.classList.add('active');
  } else if (vars.pageBody.classList.contains('portfolio')) {
    vars.portfolioActive.classList.add('active');
  } else if (vars.pageBody.classList.contains('cv')) {
    vars.cvActive.classList.add('active');
  } else if(vars.pageBody.classList.contains('contact')) {
    vars.contactActive.classList.add('active')
  }
}
activatedPage();
