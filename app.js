//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');

    if (listaAmigos.length === 0) {
        alert('Por favor, adicione pelo menos um nome antes de sortear!');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * listaAmigos.length);

    const nomeSorteado = listaAmigos[indexAleatorio].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>O amigo secreto é:</strong> ${nomeSorteado}</li>`;
}
