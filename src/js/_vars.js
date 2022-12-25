export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  // preloader
  preloader: document.querySelector('#preloader'),
  // modal
  modalContainer: document.querySelector('#modalContainer'),
  modalOpen: {
    firstButton: document.querySelector('#modalOpenFirst'),
    secondButton: document.querySelector('#modalOpenSecond'),
  },
  modalClose: {
    firstButton: document.querySelector('#modalClose'),
    secondButton: document.querySelector('#modal'),
  },
  modalPopupSent: document.querySelector('#modalPopupSent'),
  modalPopupError: document.querySelector('#modalPopupError'),
  modalPopupCloseSent: document.querySelector('#modalPopupCloseSent'),
  modalPopupCloseError: document.querySelector('#modalPopupCloseError'),
  formPopupSent: document.querySelector('#formPopupSent'),
  formPopupError: document.querySelector('#formPopupError'),
  formPopupCloseSent: document.querySelector('#formPopupCloseSent'),
  formPopupCloseError: document.querySelector('#formPopupCloseError'),
  // body
  pageBody: document.querySelector('body'),
  // header
  header: document.querySelector('#header'),
  menu: document.querySelector('#menu'),
  burger: document.querySelector('#burger'),
  mainActive: document.querySelector('#main-link'),
  portfolioActive: document.querySelector('#portfolio-link'),
  cvActive: document.querySelector('#cv-link'),
  contactActive: document.querySelector('#contact-link'),
  links: document.querySelectorAll('.header__nav-link'),
  // hero
  hero: document.querySelector('#hero'),
  anchors: document.querySelectorAll('a[href*="#"]'),
  date: new Date(),
  // about
  myAge: document.querySelector('#age'),
  dateExperienceYear: document.querySelector('#dateExperienceYearStart'),
  // footer
  thisYear: document.querySelector('#year'),
}
