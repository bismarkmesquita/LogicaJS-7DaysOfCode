const main = document.getElementById('main')

const texto = document.getElementById('texto')
texto.innerText = "Você deseja inserir algum item na sua lista de compras?"

//botoes
const opcaoSim = document.getElementById('opcaoSim')
const opcaoNao = document.getElementById('opcaoNao')

opcaoNao.addEventListener('click', naoAdicionaProduto)
opcaoSim.addEventListener('click', adicionaProduto)

//input
//const comida = document.getElementById('comida')
//console.log(comida)

//arrays
let listaComidas = [];

let laticinios = [];
let frutas = []; 
let congelados = []; 
let doces = [];


function naoAdicionaProduto() {
    texto.innerText = "Ok, boas compras!"
}

function adicionaProduto() {
    opcaoNao.remove()
    opcaoSim.remove()
    texto.innerText = "Qual comida você deseja inserir? Digite o nome da fruta e depois a sua categoria."
    main.innerHTML += `<input type="text" id="comida">`

    main.innerHTML += `<button id="botaoFrutas"> Frutas </button>`
    main.innerHTML += `<button id="botaoLaticinios"> Laticínios </button>`
    main.innerHTML += `<button id="botaoCongelados"> Congelados </button>`
    main.innerHTML += `<button id="botaoDoces"> Doces </button>`

    const botaoLaticinios = document.getElementById('botaoLaticinios')
    botaoLaticinios.addEventListener('click', guardarLaticinios)

    const botaoFrutas = document.getElementById('botaoFrutas')
    botaoFrutas.addEventListener('click', guardarFrutas)

    const botaoCongelados = document.getElementById('botaoCongelados')
    botaoCongelados.addEventListener('click', guardarCongelados)

    const botaoDoces = document.getElementById('botaoDoces')
    botaoDoces.addEventListener('click', guardarDoces)
}

function guardarLaticinios() {
    let inputComida = document.getElementById('comida')
    let comida = inputComida.value
    
    laticinios.push(comida);
    apresentaLista()
}

function guardarFrutas() {
    let inputComida = document.getElementById('comida')
    let comida = inputComida.value
    
    frutas.push(comida);
    apresentaLista()
}

function guardarCongelados() {
    let inputComida = document.getElementById('comida')
    let comida = inputComida.value
    
    congelados.push(comida);
    apresentaLista()
}

function guardarDoces() {
    let inputComida = document.getElementById('comida')
    let comida = inputComida.value
    
    doces.push(comida);
    apresentaLista()
}

function apresentaLista() {
    const lista = document.getElementById('lista')

    lista.innerHTML = `
    <h3>Sua lista tem:</h3>
    <p> Frutas: ${frutas} </p>
    <p> Laticíneos: ${laticinios} </p>
    <p> Congelados: ${congelados} </p>
    <p> Doces: ${doces} </p>
    `

    lista.style.backgroundColor = "#E8F9FD";
}
