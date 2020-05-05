// Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.

const prompt = require("prompt-sync")();

const FirstNumber = Number(prompt("Enter a first number: "));
const SecondNumber = Number(prompt("Enter a  second number: "));

if (FirstNumber > SecondNumber) {
	console.log(`Minor: ${SecondNumber} ; Greater: ${FirstNumber}`);
} else if (FirstNumber < SecondNumber) {
	console.log(`Minor: ${FirstNumber} ; Greater: ${SecondNumber}`);
} else {
	console.log("The two numbers are equal");
}
