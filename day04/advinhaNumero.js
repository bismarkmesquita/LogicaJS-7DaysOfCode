const main = document.getElementById('main');
const texto = document.getElementById('texto');
let acertou = false;

// sorteia numero
let numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
//console.log(numeroAleatorio)

const button = document.getElementById('button')
button.addEventListener('click', verificaNumero)

// recarregar a página
function recarregaPagina() {
    window.location.reload();
}

function verificaNumero() {
    let numeroUsuario = document.getElementById('input-usuario').value

    for (let i = 0; i < 3; i++) {
        if (numeroUsuario == numeroAleatorio) {
            texto.innerHTML = "Parabéns, você acertou!"
            acertou = true;

            button.innerText = "Recomeçar"
            button.addEventListener('click', recarregaPagina);
            break;

        }
        texto.innerHTML = "Errado, tente de novo com outro número!";
    }

    if (acertou == false) {
        texto.innerHTML = `Infelizmente você não acertou, o número correto era ${numeroAleatorio}.`

        button.innerText = "Recomeçar"
        button.addEventListener('click', recarregaPagina);
    }
}
