// Escriba un programa que pida dos números enteros y que escriba si el mayor es múltiplo del menor.
const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter a first number: "));
const secondNumber = Number(prompt("Enter a  second number: "));

if(firstNumber===0 || secondNumber===0){
    console.log("Sorry, this program does not support negative values.")
}else if(firstNumber<0 || secondNumber<0){
    console.log("Sorry, this program does not support negative values.")
}else if (firstNumber > secondNumber) {
	isMultiplo(firstNumber, secondNumber);
} else {
	isMultiplo(secondNumber, firstNumber);
}

function isMultiplo(numero1, number2) {
	if (numero1 % number2 === 0) {
		console.log(`${numero1} is multiple of ${number2}`);
	} else {
		console.log(`${numero1} is not multiple of ${number2}`);
	}
}
