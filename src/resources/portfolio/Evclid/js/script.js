document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
       document.querySelector('#menu').classList.toggle('is-active');
       // document.querySelector('body').classList.toggle('fixed-page');
       document.querySelector('#burger').classList.toggle('open-menu');
    });

    document.querySelectorAll('.section-how__steps-item-btn').forEach( function(tabsBtn) {
       // console.log(tabsBtn)
       tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path;
          document.querySelectorAll('.tab-content').forEach( function(tabContent) {
             tabContent.classList.remove('tab-active')
          });
          document.querySelector(`[data-target = "${path}"]`).classList.add('tab-active');

          document.querySelectorAll('.section-how__steps-item-btn').forEach(function(btn) {
             btn.classList.remove('steps-btn-active')
          })
          document.querySelector(`[data-path = "${path}"]`).classList.add('steps-btn-active')
       });
    });


    $(function() {
       $( "#accordion" ).accordion({
          collapsible: true,
          heightStyle: "content"
       });
    });

    // Валидация формы
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
       e.preventDefault();

       let error = formValidate(form);

       if (error===0) {
          // Скрипт для соединения с php
          // Отправка формы на почту(например)
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
          }
          // Для Чекбокса
          else if(input.getAttribute("type") === "checkbox" && input.checked === false){
             formAddError(input);
             error++;
          }
          else {
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

 // Маска телефона
 var selector = document.querySelector("input[type='tel']");
 var im = new Inputmask('+7 (999) 999-99-99');

 im.mask(selector);
