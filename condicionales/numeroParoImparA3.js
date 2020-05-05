// Escriba un programa que pida primero un número par y a continuación un numero impar (positivos o negativos). En caso de que uno o los dos valores no sean correctos, se mostrarán uno o dos avisos.
const prompt = require("prompt-sync")();

let evenNumber;
let oddNumber;

evenNumber = Number(prompt("Enter a even number: "));
oddNumber = Number(prompt("Enter a odd number: "));

if (evenNumber % 2 !== 0) {
	console.log(`You have not written an even number`);
}

if (oddNumber % 2 === 0) {
	console.log(`You have not written an odd number`);
}

if (evenNumber % 2 === 0 && oddNumber % 2 !== 0) {
	console.log(`Thank you for your cooperation`);
} else {
	console.log(`Run a new program to try`);
}
