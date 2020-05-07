// Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.
const prompt = require("prompt-sync")();
let listNumber = [];
let accountantNumber = 0;

const firstNumber = Number(prompt("Enter a first number: "));
listNumber.push(firstNumber);
const secondNumber = Number(prompt("Enter a  second number: "));
if (listNumber.includes(secondNumber)) {
	accountantNumber++;
}
listNumber.push(secondNumber);

const thirdNumber = Number(prompt("Enter a  third number: "));
if (listNumber.includes(thirdNumber)) {
	accountantNumber++;
}

if (accountantNumber === 2) {
	console.log("You have written the same number three times.");
} else if (accountantNumber === 1) {
	console.log("You have written one of the numbers twice.");
} else {
	console.log("The three numbers he has written are different.");
}
