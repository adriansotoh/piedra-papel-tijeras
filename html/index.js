let playerScore = 0;
let machineScore = 0;
const playerInputScore = document.getElementById("player-score");
const machineInputScore = document.getElementById("machine-score");
const result = document.getElementById("result");
const modal = document.getElementById("modal");
var options = document.getElementsByClassName("image");
const reiniciar = document.getElementById("reiniciar");
console.log(options);

function machineOption() {
  const opciones = ["piedra", "papel", "tijeras"];
  const machine = Math.floor(Math.random() * 3);
  return opciones[machine];
}

function victoria(machine) {
  playerScore++;
  playerInputScore.innerHTML = playerScore;
  machineInputScore.innerHTML = machineScore;
  result.innerHTML = `<h1 class="text-win">Tú ganaste c:!</h1> <p>La máquina escogió <strong>${machine}</strong></p>`;
  modal.style.display = "block";
}

function derrota(machine) {
  machineScore++;
  playerInputScore.innerHTML = playerScore;
  machineInputScore.innerHTML = machineScore;
  result.innerHTML = `<h1 class="text-lose">Tú perdiste :c!</h1> <p>La máquina escogió <strong>${machine}</strong></p>`;
  modal.style.display = "block";
}

function empate(machine) {
  playerInputScore.innerHTML = playerScore;
  machineInputScore.innerHTML = machineScore;
  result.innerHTML = `<h1 class="text-draw">Empate!, contienda reñida</h1> <p>La máquina escogió <strong>${machine}</strong></p>`;
  modal.style.display = "block";
}

function play(playerOption) {
  const machineElection = machineOption();
  console.log(machineElection);
  console.log(playerOption + machineElection);
  switch (playerOption + machineElection) {
    case "papelpiedra":
    case "tijeraspapel":
    case "piedratijeras":
      victoria(playerOption, machineElection);
      break;
    case "papeltijeras":
    case "piedrapapel":
    case "tijeraspiedra":
      derrota(playerOption, machineElection);
      break;
    default:
      empate(playerOption, machineElection);
      break;
  }
}

function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

function main() {
  options[0].addEventListener("click", function () {
    play("piedra");
  });
  options[1].addEventListener("click", function () {
    play("papel");
  });
  options[2].addEventListener("click", function () {
    play("tijeras");
  });
}

function reestablecer() {
  machineScore = 0;
  playerScore = 0;
  machineInputScore.innerHTML = machineScore;
  playerInputScore.innerHTML = playerScore;
}

reiniciar.addEventListener("click", reestablecer);
window.addEventListener("click", clearModal);
main();
