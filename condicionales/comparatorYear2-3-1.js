// Mejore el programa anterior haciendo que cuando la diferencia sea exactamente un año, escriba la frase en singular:
const prompt = require("prompt-sync")();

const actualYear = Number(prompt("Enter the actual year: "));
const secondYear = Number(prompt("Enter the second year: "));

let differenceYear = Math.abs(actualYear - secondYear);

if (actualYear < secondYear && differenceYear === 1) {
	console.log(`To reach year ${secondYear} lack ${differenceYear} year`);
} else if (actualYear < secondYear) {
	console.log(
		`To get to the year ${secondYear} missing ${differenceYear} years`
	);
} else if (actualYear > secondYear) {
	console.log(
		`since the year ${secondYear} has passed ${differenceYear} years`
	);
} else if (actualYear === secondYear) {
	console.log("They are the same year");
}
