// Mejore el programa anterior haciendo que el programa avise cuando se escriben valores negativos o nulos.
const prompt = require("prompt-sync")();

const firstNumber = Number(prompt("Enter a first number: "));
const secondNumber = Number(prompt("Enter a  second number: "));

if(isNull(firtNumber) || isNull(secondNumber)){
    console.log("Sorry, this program does not support null values")
}else if(isNegative(firstNumber) || isNegative(secondNumber)){
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

function isNull(number){
	if(number===0){
		return true
	}else{
		return false
	}
	
}
function isNegative(number){
	if(number<0){
		return true
	}else{
		return false
	}
}