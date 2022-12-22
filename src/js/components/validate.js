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
                    let result = await response.json();
                    alert(result.message);
                    // form.reset();
                    vars.pageBody.classList.remove('body-hidden');
                    vars.pageBody.classList.remove('_sending');
                } else {
                    alert('Ошибка!');
                    // form.reset();
                    vars.pageBody.classList.remove('body-hidden');
                    vars.pageBody.classList.remove('_sending');
                }
            } else {
                alert('Заполните обязательные поля');
            }
        }

        function formValidate(form){
            let error = 0;
            let formReq = document.querySelectorAll('.__req');

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
                // Для E-mail
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

        // Функция тестирование email
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    })
}
validate()
