//entre la cantidad de numero y decir y la cantidad de nuemros que fueorn iguels.
const prompt = require("prompt-sync")();

let numberList = [];
let accountantNumber = 0;
const quantityNumber = Number(prompt("Enter the quantity number: "));

for (let i = 0; i < quantityNumber; i++) {
	const number = prompt(`Enter the number ${i + 1}: `);

	if (numberList.includes(number)) {
		accountantNumber++;
	}
	numberList.push(number);
}
console.log(`Numbers were repeated ${accountantNumber} times `);
