// Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y diga al final cuántos han sido pares y cuántos impares.
const prompt = require("prompt-sync")();

const amountOfValues = Number(
	prompt("How many values ​​are you going to enter?: ")
);
let cantidadEven = 0;
let cantidadOdd = 0;
if (amountOfValues <= 0) {
	console.log("Impossible!");
} else {
	for (i = 1; i <= amountOfValues; i++) {
		let value = Number(prompt(`Write the value ${i}: `));
		if (value % 2 === 0) {
			cantidadEven++;
		} else {
			cantidadOdd++;
		}
	}
	console.log(
		`You have written ${cantidadEven} even numbers and ${cantidadOdd} odd numbers.`
	);
	console.log("PThank you for your cooperation.");
}
