import vars from '../_vars';

export const validate = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('form');
        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();
            let error = formValidate(form);
            let formData = new FormData(form);
            if (error===0) {
                vars.pageBody.classList.add('body-hidden');
                vars.pageBody.classList.add('_sending');
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData,
                });
                if(response.ok) {
                    form.reset();
                    vars.pageBody.classList.remove('_sending');
                    if(vars.pageBody.classList.contains('contact')) {
                        vars.formPopupSent.classList.add('active')
                        vars.formPopupCloseSent.addEventListener('click', () => {
                            vars.formPopupSent.classList.remove('active')
                            vars.pageBody.classList.remove('body-hidden');
                        })
                    } else {
                        vars.modalPopupSent.classList.add('active');
                        vars.modalPopupCloseSent.addEventListener('click', () => {
                            vars.modalPopupSent.classList.remove('active')
                            vars.pageBody.classList.remove('body-hidden');
                        })
                    }
                } else {
                    form.reset();
                    vars.pageBody.classList.remove('_sending');
                    if(vars.pageBody.classList.contains('contact')) {
                        vars.formPopupError.classList.add('active')
                        vars.formPopupCloseError.addEventListener('click', () => {
                            vars.formPopupError.classList.remove('active')
                            vars.pageBody.classList.remove('body-hidden');
                        })
                    } else {
                        vars.modalPopupError.classList.add('active');
                        vars.modalPopupCloseError.addEventListener('click', () => {
                            vars.modalPopupError.classList.remove('active')
                            vars.pageBody.classList.remove('body-hidden');
                        })
                    }
                }
            } else {
                console.log('Заполните обязательные поля');
            }
        }

        function formValidate(form){
            let error = 0;
            let formReq = document.querySelectorAll('.__req');

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
                if(input.classList.contains('__email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }

        function formAddError(input) {
            input.parentElement.classList.add('__error');
            input.classList.add('__error');
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('__error');
            input.classList.remove('__error');
        }

        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    })
}
validate()
