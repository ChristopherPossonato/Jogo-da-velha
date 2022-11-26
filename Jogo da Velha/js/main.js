// pegar os botões de cada posição
const btn = document.querySelectorAll("[data-key]");

// Matriz com possibilidades de vitória 
const possVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 9],
    [2, 4, 6],
];

// Criar vez da jogada "X" e "O"
var vezJogada = true;

// matriz vazia para receber jogadas
var matriz = [];

// evento de click 
function posicao(event) {
    const jogada = vezJogada ? "X" : "O";
    event.target.innerText = jogada;

    matriz.push();

    console.log(matriz);

    vezJogada = !vezJogada
}



// percorrendo todos botões
btn.forEach (e => {
    e.addEventListener("click", posicao, {once: true})
});