// Escriba un programa que simule un juego en el que dos jugadores (Álvaro y Bárbara) tiran un dado. El que saque el valor más alto, gana. Si la puntuación coincide, empatan.
const prompt = require("prompt-sync")();
let namePlayer1 = prompt("Write you name: ");
let namePlayer2 = prompt("Write you name: ");
const playerA = getRandomNumber();
const playerB = getRandomNumber();

console.log(`${namePlayer1} has taken ${playerA}`);
console.log(`${namePlayer2} has taken ${playerB}`);
let messager = "Has won";

if (playerA === playerB) {
	console.log("They have tied.");
} else if (playerA > playerB) {
	console.log(`${messager} ${namePlayer1}`);
} else {
	console.log(`${messager} ${namePlayer2}`);
}

function getRandomNumber() {
	return (Math.floor(Math.random() * 10) % 6) + 1;
}
