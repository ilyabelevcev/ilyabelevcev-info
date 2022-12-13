import GraphModal from 'graph-modal';
import vars from '../_vars';

export const modal = new GraphModal();



export const openModal = () => {
    if (vars.pageBody.classList.contains('main') || vars.pageBody.classList.contains('portfolio') || vars.pageBody.classList.contains('cv')) {
        vars.modalOpen.firstButton.addEventListener('click', (e) => {
            vars.header.classList.add('is-hidden');
            vars.hero.classList.add('is-hidden');
        });
            vars.modalOpen.secondButton.addEventListener('click', (e) => {
            vars.header.classList.add('is-hidden');
            vars.hero.classList.add('is-hidden');
        });
    }
}
openModal()
export const closeModal = () => {
    if (vars.pageBody.classList.contains('main') || vars.pageBody.classList.contains('portfolio') || vars.pageBody.classList.contains('cv')) {
        vars.modalClose.firstButton.addEventListener('click', (e) => {
            vars.header.classList.remove('is-hidden');
            vars.hero.classList.remove('is-hidden');
        })
        let modal_error = 0;
        vars.modalContainer.addEventListener('click', (e) => {
            modal_error++
        })
        vars.modalClose.secondButton.addEventListener('click', (e) => {
        if(modal_error == 0) {
            vars.header.classList.remove('is-hidden');
            vars.hero.classList.remove('is-hidden');
        } else {
            modal_error = 0
        }
        })
    }
}
closeModal()

