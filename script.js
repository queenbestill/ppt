const rock = document.querySelector('#piedra-img')
const paper = document.querySelector('#papel-img')
const scissors = document.querySelector('#tijera-img')

let selecUsuario 
let selecOrdenador 

rock.addEventListener('click',function () {
    let result =selectUser('rock')
    console.log(result)
})

paper.addEventListener('click',function () {
    selectUser('papel')
})

scissors.addEventListener('click',function () {
    selectUser('tijeras')
})

function selectUser(player){

    let pcselect = generarAleatorioEntre0y2()
    console.log(pcselect)
    console.log(player)
    if(player === "piedra" && pcselect === "papel"){
        return "Gana ordenador"
    } 
    else if(player === "papel" && pcselect === "tijera"){
        return "Gana ordenador"
    } else if(player === "tijera" && pcselect ==="piedra"){
        return "Gana ordenador"
    }
    else {
        return "Gana jugador"
    }
}

function generarAleatorioEntre0y2
() {
  let a = Math.floor(Math.random() * 3);
  if (a === 0) {
    return 'piedra';
  } else if (a === 1) {
    return 'papel';
  } else {
    return 'tijera';
  }
}

