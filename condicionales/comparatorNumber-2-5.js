// Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.
const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter a first number: "));
const secondNumber = Number(prompt("Enter a  second number: "));
const thirdNumber = Number(prompt("Enter a  third number: "));

if (
	firstNumber === secondNumber &&
	secondNumber === thirdNumber &&
	thirdNumber === firstNumber
) {
	console.log("You have written the same number three times.");
} else if (
	(firstNumber === secondNumber && secondNumber === firstNumber) ||
	(firstNumber === thirdNumber && thirdNumber === firstNumber) ||
	(secondNumber === thirdNumber && thirdNumber === secondNumber)
) {
	console.log("You have written one of the numbers twice.");
} else if (
	firstNumber != secondNumber &&
	secondNumber != thirdNumber &&
	thirdNumber != firstNumber
) {
	console.log("The three numbers he has written are different.");
}
