//entre la cantidad de numero y decir y la cantidad de nuemros que fueorn iguels.
const prompt = require("prompt-sync")();

let numberList = [];
let contadorNumber = 0;
const quantityNumber = Number(prompt("Enter the quantity number: "));

for (let i = 0; i < quantityNumber; i++) {
	const number = prompt(`enter the number ${i + 1}: `);

	if (numberList.includes(number)) {
		contadorNumber++;
	}
	numberList.push(number);
}
console.log(`The quantity numbers that are repeated is ${contadorNumber}`);
