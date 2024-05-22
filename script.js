const rock = document.querySelector('#piedra-img');
const paper = document.querySelector('#papel-img');
const scissors = document.querySelector('#tijera-img');
const jugadorChoice = document.getElementById('jugador-choice');
const ordenadorChoice = document.getElementById('ordenador-choice');
const jugadorChoiceImg = document.getElementById('jugador-choice-img');
const ordenadorChoiceImg = document.getElementById('ordenador-choice-img');
const contarTirada = document.getElementById("tirada")
const tiradasPendientes = document.getElementById("restantes")
const dialog=document.getElementById('cuadro')
let resetButton
console.log(dialog)

let jugadorScore = 0;
let ordenadorScore = 0;
let turno = 0;
let inicial = document.getElementById("#inicial")
dialog.style.display = 'none'

rock.addEventListener('click', function () {
  jugar('piedra');
});
paper.addEventListener('click', function () {
  jugar('papel');
});
scissors.addEventListener('click', function () {
  jugar('tijera');
});

function jugar(selecUsuario) {
  if (turno === 3) {
    return }
  // actualizar la jugada para que sea segunda 
  turno++;
  contarTirada.innerText = turno;
  tiradasPendientes.innerText = 3- turno;


  let selecOrdenador = generarAleatorioEntre0y2();
  let resultado = determinarGanador(selecUsuario, selecOrdenador);

  jugadorChoice.innerText = selecUsuario;
  ordenadorChoice.innerText = selecOrdenador;

  mostrarImagenSeleccion(jugadorChoiceImg, selecUsuario);
  mostrarImagenSeleccion(ordenadorChoiceImg, selecOrdenador);

  if (resultado === 'Gana jugador') {
    jugadorScore++;
  } else if (resultado === 'Gana ordenador') {
    ordenadorScore++;
  }

  actualizarPuntuacion();
  console.log(`Jugador: ${selecUsuario} - Ordenador: ${selecOrdenador}`);
  console.log(resultado);

  if (turno === 3) {
    dialog.style.display = 'block';
    mostrarDialogo(resultado);
  }
}

function determinarGanador(player, pcselect) {
  if (player === pcselect) {
    return "Empate";
  } else if (
    (player === "piedra" && pcselect === "tijera") ||
    (player === "papel" && pcselect === "piedra") ||
    (player === "tijera" && pcselect === "papel")
  ) {

    return "Gana jugador";
  } else {
    return "Gana ordenador";
  }
}

function generarAleatorioEntre0y2() {
  let a = Math.floor(Math.random() * 3);
  if (a === 0) {
    return 'piedra';
  } else if (a === 1) {
    return 'papel';
  } else {
    return 'tijera';
  }
}

function actualizarPuntuacion() {
  document.getElementById('jugador-score').innerText = jugadorScore;
  document.getElementById('ordenador-score').innerText = ordenadorScore;
}

function mostrarImagenSeleccion(element, seleccion) {
  element.style.display = 'block';
  let imagen = document.createElement('img');
  if (seleccion === 'piedra') {
    imagen.src = 'img/piedradigi.png';
    imagen.style.height = '15vh';
  } else if (seleccion === 'papel') {
    imagen.src = 'img/papeldigi.png';
    imagen.style.height = '15vh';
  } else if (seleccion === 'tijera') {
    imagen.src = 'img/tijeradigi.png';
    imagen.style.height = '15vh';
  }
  element.innerHTML = '';
  element.appendChild(imagen);
}

function mostrarDialogo(resultado) {
  resetButton = document.createElement('button')

  resetButton.setAttribute('id','reset-button')
  resetButton.innerText= 'Reiniciar'
  dialog.appendChild(resetButton)
  
  const message = document.getElementById('game-over-dialog');
  if (jugadorScore > ordenadorScore) {
    message.innerText = "¡Ganaste!";
    message.style.color = "green";
  } else {
    message.innerText = "¡Perdiste!";
    message.style.color="red";
  }

  
  resetButton.onclick = function () {

    jugadorScore = 0;
    ordenadorScore = 0;
    turno = 0;
    actualizarPuntuacion();
    dialog.style.display = 'none';
    dialog.removeChild(resetButton)
    jugadorChoice.innerText = '-';
    ordenadorChoice.innerText = '-';
    jugadorChoiceImg.style.display = 'none';
    ordenadorChoiceImg.style.display = 'none';
  }
}

const inicio =document.getElementById("inicial")
const newInicio = document.createElement("div")
newInicio.setAttribute("id","bienvenida")
newInicio.innerHTML = "<h1>Bienvenidos a Piedra, papel y tijeras</h1>"
inicio.appendChild(newInicio)

const newButton = document.createElement("button")
newButton.setAttribute("id", "start")
newButton.innerHTML="<h2>Inicio del Juego</h2>"
inicio.appendChild(newButton)


botonInicio.addEventListener("click", function(){
return inicial.style.display="none"
})