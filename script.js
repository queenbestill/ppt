const rock = document.querySelector('#piedra-img')
const paper = document.querySelector('#papel-img')
const scissors = document.querySelector('#tijera-img')

let selecUsuario 
let selecOrdenador 
rock.addEventListener('click',function () {
    selectUser('rock')
})



paper.addEventListener('click',function () {
    alert('paper')
})


scissors.addEventListener('click',function () {
    alert('scissors')
})


function selectUser(player){

    console.log(player)

    if(player === "piedra" && pc === "papel"){
        return "Gana ordenador"
    } 
    else if(player === "papel" && pc === "tijera"){
        return "Gana ordenador"
    } else if(player === "tijera" && pc ==="piedra"){
        return "Gana ordenador"
    }
    else {
        return "Gana jugador"
    }
}

const selections = document.querySelectorAll('data-selection')



function generarAleatorioEntre0y2() {
  let a = Math.floor(Math.random() * 3);
  if (a ===0) {
   return console.log('piedra')
  } 
  else if (a===1) {
   return console.log('papel')
} 
    else {
   return console.log('tijera')
} 
 }
