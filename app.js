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
}
