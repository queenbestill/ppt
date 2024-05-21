const rock = document.querySelector('#piedra-img');
const paper = document.querySelector('#papel-img');
const scissors = document.querySelector('#tijera-img');
const jugadorChoice = document.getElementById('jugador-choice');
const ordenadorChoice = document.getElementById('ordenador-choice');
const jugadorChoiceImg = document.getElementById('jugador-choice-img');
const ordenadorChoiceImg = document.getElementById('ordenador-choice-img');
const contarTirada = document.getElementById("tirada")
const tiradasPendientes = document.getElementById("restantes")

let jugadorScore = 0;
let ordenadorScore = 0;
let turno = 0;

rock.addEventListener('click', function () {
  jugar('piedra');
});
paper.addEventListener('click', function () {
  jugar('papel');
});
scissors.addEventListener('click', function () {
  jugar('tijera');
});

// cada clic suma a contartirada y resta a tiradas pendientes
function detenerJugar () {
 if (turno===3) {
  selecUsuario==

  // da el mensaje de ganó o perdió

  // no se puede seguir jugando

 }
}

function jugar(selecUsuario) {
  // actualizar la jugada para que sea segunda 
  turno++;
  contarTirada.innerText = turno;
  tiradasPendientes.innerText = 3-turno;


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

  if (jugadorScore === 3 || ordenadorScore === 3) {
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
    imagen.src = 'img/piedra.jpg';
  } else if (seleccion === 'papel') {
    imagen.src = 'img/papel.jpg';
  } else if (seleccion === 'tijera') {
    imagen.src = 'img/tijera.jpg';
  }
  element.innerHTML = '';
  element.appendChild(imagen);
}

function mostrarDialogo(resultado) {
  const dialog = document.getElementById('game-over-dialog');
  const message = document.getElementById('game-over-message');
  if (jugadorScore === 3) {
    message.innerText = "¡Ganaste!";
  } else {
    message.innerText = "¡Perdiste!";
  }
  dialog.style.display = 'block';

  const closeButton = document.getElementById('close-button');
  const resetButton = document.getElementById('reset-button');

  closeButton.onclick = function () {
    dialog.style.display = 'none';
  }

  resetButton.onclick = function () {
    jugadorScore = 0;
    ordenadorScore = 0;
    actualizarPuntuacion();
    dialog.style.display = 'none';
    jugadorChoice.innerText = '-';
    ordenadorChoice.innerText = '-';
    jugadorChoiceImg.style.display = 'none';
    ordenadorChoiceImg.style.display = 'none';
  }
}
