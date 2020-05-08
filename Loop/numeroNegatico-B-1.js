// Escriba un programa que pregunte cuántos números se van a introducir, pida esos números y escriba cuántos negativos ha introducido.
const prompt = require("prompt-sync")();
const valueCantidad = Number(
	prompt("How many values ​​are you going to enter?: ")
);
let negativeNumber = 0;
if (valueCantidad < 0) {
	console.log(" ¡Impossible!");
} else if (valueCantidad === 0) {
	console.log("You have not entered a negative number.");
} else {
	for (i = 1; i <= valueCantidad; i++) {
		let valor = Number(prompt(`Write a number ${i}: `));
		if (valor < 0) {
			negativeNumber++;
		}
	}
	console.log(`Has written ${negativeNumber} negative numbers`);
}
