// Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y muestre un mensaje cada vez que un número no sea mayor que el primero.
const prompt = require("prompt-sync")();

const amountOfValues = Number(
	prompt("How many values ​​are you going to enter?: ")
);

if (amountOfValues <= 0) {
	console.log("Impossible!");
} else {
	let firstValue;
	for (let i = 0; i < amountOfValues; i++) {
		if (i === 0) {
			firstValue = Number(prompt("Write a number:"));
		} else {
			const value = Number(
				prompt(`Write a number greater than ${firstValue} :`)
			);
			if (value < firstValue) {
				console.log(`${value} is not greater than ${firstValue}`);
			}
		}
	}
	console.log("Thank you for your cooperation.");
}
