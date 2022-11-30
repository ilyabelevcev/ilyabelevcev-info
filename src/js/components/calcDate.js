// calculation age, this year, etc
import vars from '../_vars';
const yearNow = vars.date.getFullYear();
const yearExperienceStart = 2021;
const yearExperience = yearNow - yearExperienceStart;

export const calcYear = () => {
    if(yearNow == 2022) {
        vars.thisYear.innerHTML = yearNow;
    } else {
        vars.thisYear.innerHTML = `2022 - ${yearNow}`
    }
}
calcYear()

export const calcDate = () => {
    if (vars.pageBody.classList.contains('cv')) {
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

        const calcMyExperience = () => {
            let dateYear = '';
            if(yearExperience < 1) {
                dateYear = '';
            } else if(yearExperience == 1) {
                dateYear = `${yearExperience} год (обучение - 1 год)`;
            } else if(yearExperience < 5) {
                dateYear = `${yearExperience} года (обучение - 1 год)`;
            } else if (yearExperience < 21) {
                dateYear = `${yearExperience} лет`;
            } else {
                dateYear = 'много лет';
            }
            document.addEventListener('DOMContentLoaded', function() {
                vars.dateExperienceYear.innerHTML = dateYear
            })
        }
        calcMyExperience()
    }
}
calcDate()
