const form = document.querySelector('.form');
const email = document.querySelector('.form__input');
const error = document.querySelector('.form__error');
const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', validarFormulario);
});

function validarFormulario(e) {

    if(expresion.test(email.value)) {
        error.classList.remove('activo');
        email.classList.remove('error');
    } else {
        e.preventDefault();
        error.classList.add('activo');
        email.classList.add('error');
    }
}