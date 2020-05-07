// Escriba un programa que simule un juego en el que dos jugadores (Álvaro y Bárbara) tiran un dado. El que saque el valor más alto, gana. Si la puntuación coincide, empatan.
const prompt = require("prompt-sync")();
const playerA = Number(prompt("enter a number: "));
const playerB = Number(prompt("enter a number: "));
let messager = "has won";
if (playerA > 6 || playerB > 6) {
	console.log("player no valid!");
} else if (playerA === playerB) {
	console.log("They have tied.");
} else if (playerA > playerB) {
	console.log(`${messager} playerA`);
} else {
	console.log(`${messager} playerB`);
}
