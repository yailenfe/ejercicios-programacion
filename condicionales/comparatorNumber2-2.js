// Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.

const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter a first number: "));
const secondNumber = Number(prompt("Enter a  second number: "));

if (firstNumber > secondNumber) {
	console.log(`Minor: ${secondNumber} ; Greater: ${firstNumber}`);
} else if (firstNumber < secondNumber) {
	console.log(`Minor: ${firstNumber} ; Greater: ${secondNumber}`);
} else {
	console.log("The two numbers are equal");
}
