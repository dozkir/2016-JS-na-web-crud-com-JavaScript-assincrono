import { criaCliente } from '../service/cliente-service.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeElement = event.target.querySelector('[data-nome]');
    const emailElement = event.target.querySelector('[data-email]');

    criaCliente(nomeElement.value, emailElement.value)
        .then(
            window.location.href = '../view/cadastro_concluido.html'
        );

    console.log('teste');
});