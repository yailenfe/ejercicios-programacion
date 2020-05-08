// Escriba un programa que simule un juego en el que dos jugadores (Gloria y Héctor) sacan tres cartas al azar del 1 al 10. Gana el jugador que obtenga la mayor puntuación total, siempre que no se pase de quince, en cuyo caso el jugador pierde.
const prompt = require("prompt-sync")();
const namePlayerA = prompt("Write you name: ");
const namePlayerB = prompt("Write you name: ");

const playerA1 = getRandomDice();
const playerA2 = getRandomDice();
const playerA3 = getRandomDice();
const playerB1 = getRandomDice();
const playerB2 = getRandomDice();
const playerB3 = getRandomDice();

const sumPlayerA = playerA1 + playerA2 + playerA3;
const sumPlayerB = playerB1 + playerB2 + playerB3;

console.log(
	`${namePlayerA} has taken ${playerA1} and ${playerA2} and ${playerA3}`
);
console.log(
	`${namePlayerB} has taken ${playerB1} and ${playerB2} and ${playerB3}`
);

if (sumPlayerA > 15 && sumPlayerB > 15) {
	console.log("not one has won");
} else if (sumPlayerA > 15 && sumPlayerB < 15) {
	console.log(`he won ${namePlayerB}`);
} else if (sumPlayerA < 15 && sumPlayerB > 15) {
	console.log(`he won ${namePlayerA}`);
} else if (sumPlayerA > sumPlayerB) {
	console.log(`Has won ${namePlayerA}`);
} else if (sumPlayerA < sumPlayerB) {
	console.log(`Has won ${namePlayerB}`);
} else {
	console.log("They have tied.");
}

function getRandomDice() {
	return Math.floor(Math.random() * 10) + 1;
}
