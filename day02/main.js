let nome = prompt("Olá! Qual o seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagem = prompt("Qual linguagem de programação você está estudando?")

const main = document.getElementById("main")
main.innerHTML = `<h1>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</h1>`

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)


let gosto = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (gosto == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso")
    main.innerHTML += `<h2>Muito bom! Continue estudando e você terá muito sucesso</h2>`
} else {
    prompt("Ahh que pena... Já tentou aprender outras linguagens?")
}