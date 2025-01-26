import { listaClientes, removeCliente } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {

    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `
        <td class="td" data-td> ${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button" botao-excluir>Excluir</button></li>
            </ul>
        </td>
    `;

    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

listaClientes()
    .then(data => {
        data.forEach(element => {
            tabela.appendChild(criaNovaLinha(element.nome, element.email, element.id));
        });
    });

tabela.addEventListener('click', (event) => { // Pega o evento de click de qualquer lugar de dentro da tabela.
    const atributosElemento = event.target.attributes;

    const isBotaoExcluir = atributosElemento['botao-excluir'] != undefined;

    if (isBotaoExcluir) {
        console.log('>>> Clicou no botão de excluir');
        const linhaCliente = event.target.closest('[data-id]'); // Pega o elemento mais próximo da td, no caso vai pegar o tr pois ele possui o data-id

        const clienteId = linhaCliente.dataset.id;

        removeCliente(clienteId).then(() => {
            linhaCliente.remove();
        });
    }
});