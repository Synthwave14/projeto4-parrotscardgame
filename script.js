
let numeroPar = null;
let elemento = document.querySelector(".conteiner-carta");
let primeiraCarta = null;
let segundaCarta = null;
let numeroTentativas = 0;

const gifs = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot'];

function baralhoPar(){
  while (numeroPar >14  || numeroPar < 4 || numeroPar % 2 !== 0) 
  {numeroPar = prompt("Quantas cartas? (Apenas pares de 4 a 14)");}
  oJogo();
}

baralhoPar();

function oJogo(){
  let baralho = [];
  for (let i = 0; i < numeroPar/2; i++) {
  const carta = criarCarta(i);
  baralho.push(carta); baralho.push(carta); }

  function criarCarta(iCarta){
  const parrot = gifs[iCarta];
  return `<div class="carta" onclick="viraCarta(this)">
            <div class="carta-frente">
              <img src="img/front.png"/>
            </div>
            <div class="carta-verso">
              <img src="gifs/${parrot}.gif"/>
            </div>
          </div>`}
  
  baralho.sort(comparador);
  for (let j = 0; j < numeroPar; j++) 
  {elemento.innerHTML += baralho[j];}

  function comparador() {
  return Math.random() - 0.5;}}

  function viraCarta(carta) {
  carta.classList.add("virada");
  if(primeiraCarta === null){
    primeiraCarta = carta;
  } else {
    segundaCarta = carta;
    comparaCarta();
  }

  function comparaCarta(){
    numeroTentativas = numeroTentativas + 1;
    if(primeiraCarta.innerHTML === segundaCarta.innerHTML){
      primeiraCarta.classList.add("combina");
      segundaCarta.classList.add("combina");
      primeiraCarta = null;
      segundaCarta = null;
      setTimeout(fimJogo, 500);
    } else {
      setTimeout(desviraCarta, 1000);
    }
  }

  function fimJogo() {
  let parCombina = document.querySelectorAll(".combina");
  if( Number(parCombina.length) === Number(numeroPar)){
    alert(`Você ganhou em ${numeroTentativas} jogadas!`)
  }  
  }

  function desviraCarta(){
    primeiraCarta.classList.remove("virada");
    segundaCarta.classList.remove("virada");
    primeiraCarta = null;
    segundaCarta = null;
  }
  
}

