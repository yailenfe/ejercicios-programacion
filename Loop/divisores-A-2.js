// Escriba un programa que pida un número entero mayor que cero y que escriba sus divisores.
const prompt = require("prompt-sync")();
const number = Number(prompt("Write a number greater than zero:"));
let divisors = [];
if (number <= 0) {
	console.log(" ¡I've asked you for an integer greater than zero!");
} else {
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}
	console.log(`The dividers of ${number} are ${divisors.join(" ")}`);
}
