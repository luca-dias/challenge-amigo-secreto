let nomes = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo");
    if (nome.value != ''){
        nomes.push(nome.value);
        // console.log(nomes);
    } else {
        alert("Insira um nome válido!");
    }
    nome.value = '';
    exibirLista()
}

function exibirLista() {
    let ulAmigos = document.getElementById("listaAmigos");
    let listaStr = ''
    for (let i = 0; i < nomes.length; i++){
        listaStr += `<li>${nomes[i]}</li>`
    }
    ulAmigos.innerHTML = listaStr;
}
