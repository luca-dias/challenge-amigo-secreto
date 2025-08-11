<div style="display: flex; flex-direction:column; ">
    <h1 style="width: 100%">Amigo Secreto</h1>
    <img src="./assets/amigo-secreto.png" style="width:50%; padding:0 25%">
    <h3 style="text-align: center">
        Divirta-se sorteando seus amigos!
    </h3>
</div>

## Sorteie nomes de uma lista ##
O objetivo é criar uma lista de nomes e sortear aleatóriamente um desses nomes.

## Função `Math.random()` ##
A função Math.random(), segundo a documentação do JavaScript [**Mdn Web Docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) . A função `Math.random()` gera um número pseudo-aleatório entre 0 e 1.

A partir desse princípio foi utilizado o tamanho da lista como fator multiplicador desse número para referenciar o item da lista a ser sorteado.

``` js
function sortearAmigo() {
    let ulResultado = document.getElementById("resultado");
    let index = parseInt(Math.random() * nomes.length);
    console.log(index);
    ulResultado.innerHTML = `<li>${nomes[index]}</li>`;
} 
```

### Objetivo de aprendizado

O objetivo desse projeto é praticar programação em JavaScript, sendo assim, o template fornecido pelos instrutores da Alura Latam, tornando o exercício mais objetivo em sua execução
