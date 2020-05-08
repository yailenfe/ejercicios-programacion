// Escriba un programa que simule un juego en el que dos jugadores (Elena y Fernando) tiran dos dados. El que saque el valor más alto, gana. Si el valor más alto coincide, decide el otro dado. Si también coincide, empatan.

const prompt = require("prompt-sync")();
const namePlayerA = prompt("Write you name: ");
const namePlayerB = prompt("Write you name: ");

const playerA1 = getRandomDice();
const playerA2 = getRandomDice();
const playerB1 = getRandomDice();
const playerB2 = getRandomDice();

console.log(`${namePlayerA} has taken ${playerA1} and ${playerA2}`);
console.log(`${namePlayerB} has taken ${playerB1} and ${playerB2}`);

if (Math.max(playerA1, playerA2) > Math.max(playerB1, playerB2)) {
	console.log(`Has won ${namePlayerA}`);
} else if (Math.max(playerA1, playerA2) < Math.max(playerB1, playerB2)) {
	console.log(`Has won ${namePlayerB}`);
} else if (Math.max(playerA1, playerA2) === Math.max(playerB1, playerB2)) {
	if (Math.min(playerA1, playerA2) > Math.min(playerB1, playerB2)) {
		console.log(`Has won ${namePlayerA}`);
	} else if (Math.min(playerA1, playerA2) < Math.min(playerB1, playerB2)) {
		console.log(`Has won ${namePlayerB}`);
	} else {
		console.log("they are tied");
	}
}

function getRandomDice() {
	return (Math.floor(Math.random() * 10) % 6) + 1;
}
