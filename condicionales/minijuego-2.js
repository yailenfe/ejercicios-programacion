const prompt = require("prompt-sync")();
const namePlayerA = prompt("Write you name: ");
const namePlayerB = prompt("Write you name: ");

const playerA1 = getRandomDice();
const playerA2 = getRandomDice();
const playerB1 = getRandomDice();
const playerB2 = getRandomDice();

const sumPlayerA = playerA1 + playerA2;
const sumPlayerB = playerB1 + playerB2;

console.log(`${namePlayerA} has taken ${playerA1} and ${playerA2}`);
console.log(`${namePlayerB} has taken ${playerB1} and ${playerB2}`);

if (sumPlayerA > sumPlayerB) {
	console.log(`Has won ${namePlayerA}`);
} else if (sumPlayerA < sumPlayerB) {
	console.log(`Has won ${namePlayerB}`);
} else {
	if (Math.max(playerA1, playerA2) > Math.max(playerB1, playerB2)) {
		console.log(`Has won ${namePlayerA}`);
	} else if (Math.max(playerA1, playerA2) < Math.max(playerB1, playerB2)) {
		console.log(`Has won ${namePlayerB}`);
	} else {
		console.log("Have tied");
	}
}

function getRandomDice() {
	return (Math.floor(Math.random() * 10) % 6) + 1;
}
