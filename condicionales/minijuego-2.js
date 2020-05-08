const playerA1 = getRandomDice();
const playerA2 = getRandomDice();
const PlayerB1 = getRandomDice();
const playerB2 = getRandomDice();

const sumPlayerA = playerA1 + playerA2;
const sumPlayerB = PlayerB1 + playerB2;

console.log(`Carmen has taken ${playerA1} y ${playerA2}`);
console.log(`David has taken ${PlayerB1} y ${playerB2}`);

if (sumPlayerA > sumPlayerB) {
	console.log("Has won player A");
} else if (sumPlayerA < sumPlayerB) {
	console.log("Has won player B");
} else {
	if (Math.max(playerA1, playerA2) > Math.max(PlayerB1, playerB2)) {
		console.log("Has won player A");
	} else if (Math.max(playerA1, playerA2) < Math.max(PlayerB1, playerB2)) {
		console.log("Has won player B");
	} else {
		console.log("Have tied");
	}
}

function getRandomDice() {
	return (Math.floor(Math.random() * 10) % 6) + 1;
}
