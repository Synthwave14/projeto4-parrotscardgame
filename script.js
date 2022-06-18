let numeroPar = null;

const gifs = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot'];

let elemento = document.querySelector(".conteiner-carta");

function ehPar(){
    while (numeroPar >14  || numeroPar < 4 || numeroPar % 2 !== 0) 
    {numeroPar = prompt("Quantas cartas? (Apenas pares de 4 a 14)");}
    iniciaJogo();
}

ehPar();

function iniciaJogo(){
  let baralho = [];
  for (let i = 0; i < numeroPar; i+=2) {
    baralho.push(`
        <div class="carta" onclick="virada(this)">
          <div class="carta-frente">
            <img src="img/front.png"/>
          </div>
          <div class="carta-verso">
            <img scr="gifs/${gifs[i / 2]}.gif"/>
          </div>
        </div>
    `)
    baralho.push(`
        <div class="carta" onclick="virada(this)">
          <div class="carta-frente">
            <img src="img/front.png"/>
          </div>
          <div class="carta-verso">
            <img scr="gifs/${gifs[i / 2]}.gif"/>
          </div>
        </div>
    `)
  }
  baralho.sort(comparador);
  for (let j = 0; j < numeroPar; j++) {
    elemento.innerHTML += baralho[j];      
  }
}

function comparador() {
    return Math.random() - 0.5;
  }





// (Escolha um número par entre 4 a 14 cartas)

// se quantidade de cartas for multiplo de 2 = aceita
// senao repita pergunta

// com a quantidade informada, faça aparecer a quantidade de duplas de cartas solicitadas viradas PARA BAIXO
// embaralhe as cartas usando .sort e Math.random

// carta deve ser virada ao clique
// sendo a primeira do par, deve permanecer virada

// ao virar a segunda carta:
// se for ambas iguais, ambas permanecem viradas
// senão, ambas desviram automaticamente APÓS 1 SEGUNDO

// alert de fim de jogo quando todas as cartas foram viradas
// contendo um texto com o NÚMERO DE TENTATIVAS

// BONUS: após o alert do final, prompt de reiniciar
