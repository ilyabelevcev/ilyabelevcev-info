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
  // body
  pageBody: document.querySelector('body'),
  // header
  header: document.querySelector('#header'),
  mainActive: document.querySelector('#main-link'),
  portfolioActive: document.querySelector('#portfolio-link'),
  cvActive: document.querySelector('#cv-link'),
  links: document.querySelectorAll('.header__nav-link'),
  // hero
  hero: document.querySelector('#hero'),
  anchors: document.querySelectorAll('a[href*="#"]'),
  date: new Date(),
  // about
  myAge: document.querySelector('#age'),
  thisYear: document.querySelector('#year'),
  dateExperienceYear: document.querySelector('#dateExperienceYearStart'),
}
