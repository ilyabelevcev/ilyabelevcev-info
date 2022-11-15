// calculation age, this year, etc
import vars from '../_vars';
const yearNow = vars.date.getFullYear();

export const calcThisYear = () => {
  vars.thisYear.innerHTML = yearNow;
}
calcThisYear()

export const calcDate = () => {
  if (vars.pageBody.classList.contains('info')) {
    const calcMyAge = (yearOfBirth) => {
      const age = yearNow - yearOfBirth;
      const ageStr = String(age);
      if(ageStr.endsWith("1")) {
        vars.myAge.innerHTML = `${age} год`;
      } else if(ageStr.endsWith("2") || ageStr.endsWith("3") || ageStr.endsWith("4")) {
        vars.myAge.innerHTML = `${age} года`;
      } else {
        vars.myAge.innerHTML = `${age} лет`;
      }
    }
    calcMyAge(2002)

    const calcMyExperience = (yearStart) => {
      const year = yearNow - yearStart;
      let dateYear = '';
      if(year < 1) {
        dateYear = '';
      } else if(year == 1) {
        dateYear = `${year} год (обучение - 1 год)`;
      } else if(year < 5) {
        dateYear = `${year} года (обучение - 1 год)`;
      } else if (year < 21) {
        dateYear = `${year} лет`;
      } else {
        dateYear = 'много лет';
      }
      if(vars.dateExperienceYear.innerHTML == null) {
        console.log("ОПА")
      }
      document.addEventListener('DOMContentLoaded', function() {
        vars.dateExperienceYear.innerHTML = dateYear
      })
    }
    calcMyExperience(2021)
  }
}
calcDate()
