// Escriba un programa que simule el juego Piedra, papel, tijera para dos jugadores (Inés y Juan).
// Las reglas del juego son las siguientes:
// Simultáneamente, los dos jugadores muestran una mano en tres posibles posiciones:
// Piedra: se muestra el puño cerrado.
// Papel: se muestra la palma de la mano.
// Tijera: se muestra la palma de la mano con los dedos separados en dos grupos.
// El jugador que ha sacado Piedra gana al jugador que ha sacado Tijera.
// El jugador que ha sacado Tijera gana al jugador que ha sacado Papel.
// El jugador que ha sacado Papel gana al jugador que ha sacado Piedra.

const prompt = require("prompt-sync")();
const OPTION_ROCK = "✊";
const OPTION_PAIPER = "✋";
const OPTION_SCISSORS = "✌️";

const namePlayerA = prompt("Write you name: ");
const namePlayerB = prompt("Write you name: ");

const playerA = getRanomValue();
const playerB = getRanomValue();

console.log(`${namePlayerA} has taken ${playerA}`);
console.log(`${namePlayerB} has taken ${playerB}`);

if (playerA === OPTION_ROCK && playerB === OPTION_SCISSORS) {
	console.log(`has won ${namePlayerA}`);
} else if (playerB === OPTION_ROCK && playerA === OPTION_SCISSORS) {
	console.log(`has won ${namePlayerB}`);
} else if (playerA === OPTION_SCISSORS && playerB === OPTION_PAIPER) {
	console.log(`has won ${namePlayerA}`);
} else if (playerB === OPTION_SCISSORS && playerA === OPTION_PAIPER) {
	console.log(`has won ${namePlayerB}`);
} else if (playerA === OPTION_PAIPER && playerB === OPTION_ROCK) {
	console.log(`has won ${namePlayerA}`);
} else if (playerB === OPTION_PAIPER && playerA === OPTION_ROCK) {
	console.log(`has won ${namePlayerB}`);
} else if (playerA === playerB) {
	console.log("Have tied");
}

function getRanomValue() {
	const options = [OPTION_ROCK, OPTION_PAIPER, OPTION_SCISSORS];
	const randomOption = options[Math.floor(Math.random() * options.length)];
	return randomOption;
}
