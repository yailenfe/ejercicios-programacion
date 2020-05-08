// Escriba un programa que pida dos números enteros y escriba qué números son pares y cuáles impares desde el primero hasta el segundo.
const prompt = require("prompt-sync")();
const firtsNumber = Number(prompt("Write an integer:"));
const secondNumber = Number(
	prompt(`Write an integer greater than or equal to ${firtsNumber}:`)
);

if (secondNumber < firtsNumber) {
	console.log(
		`I have asked you for an integer greater than or equal to ${firtsNumber}`
	);
} else if (secondNumber >= firtsNumber) {
	for (let i = firtsNumber; i <= secondNumber; i++) {
		if (i % 2 == 0) {
			console.log(`The number ${i} is even`);
		} else {
			console.log(`The number ${i} is odd`);
		}
	}
}
