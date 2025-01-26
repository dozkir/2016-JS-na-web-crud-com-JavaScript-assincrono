export const listaClientes = () => {
    return fetch(`http://dozkir:3003/profile`) // Por padrão, o fetch já faz um GET e retorna uma promise.
        .then(resposta => {
            return resposta.json(); // A função json() pertence ao objeto "resposta". Ele espera receber um JSON e retorna uma promise que será resolvida com os dados do JSON no formato de objeto.
        });
}

export const criaCliente = (nome, email) => {
    return fetch(`http://dozkir:3003/profile`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
    }).then(resposta => {
        return resposta.body;
    });
}

export const removeCliente = (id) => {
    return fetch(`http://dozkir:3003/profile/${id}`, {
        method: 'DELETE'
    });
}