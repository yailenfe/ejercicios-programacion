// Escriba un programa que pida dos números enteros y que escriba si el mayor es múltiplo del menor.
const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter a first number: "));
const secondNumber = Number(prompt("Enter a  second number: "));

if (firstNumber > secondNumber) {
	if (firstNumber % secondNumber === 0) {
		console.log(`${firstNumber} is multiple of ${secondNumber}`);
	} else {
		console.log(`${firstNumber} is not multiple of ${secondNumber}`);
	}
} else {
	if (secondNumber % firstNumber === 0) {
		console.log(`${secondNumber} is multiple of ${firstNumber}`);
	} else {
		console.log(`${secondNumber} not is multiple of ${firstNumber}`);
	}
}
