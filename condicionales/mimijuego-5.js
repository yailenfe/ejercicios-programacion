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
let namePlayer1 = prompt("Write you name: ");
let namePlayer2 = prompt("Write you name: ");

const playerA = getRanomValue();
const playerB = getRanomValue();

console.log(`${namePlayer1} has taken ${playerA}`);
console.log(`${namePlayer2} has taken ${playerB}`);

if (playerA === "Piedra" && playerB === "Tijera") {
	console.log(`has won ${namePlayer1}`);
} else if (playerB === "Piedra" && playerA === "Tijera") {
	console.log(`has won ${namePlayer2}`);
} else if (playerA === "Tijera" && playerB === "Papel") {
	console.log(`has won ${namePlayer1}`);
} else if (playerB === "Tijera" && playerA === "Papel") {
	console.log(`has won ${namePlayer2}`);
} else if (playerA === "Papel" && playerB === "Piedra") {
	console.log(`has won ${namePlayer1}`);
} else if (playerB === "Papel" && playerA === "Piedra") {
	console.log(`has won ${namePlayer2}`);
} else if (playerA === playerB) {
	console.log("Have tied");
}

function getRanomValue() {
	const options = ["Piedra", "Papel", "Tijera"];
	const randomOption = options[Math.floor(Math.random() * options.length)];
	return randomOption;
}
