// Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año
const prompt = require("prompt-sync")();

const actualYear = Number(prompt("Enter the actual year: "));
const secondYear = Number(prompt("Enter the second year: "));

let differenceYear = Math.abs(actualYear - secondYear);

if (actualYear < secondYear) {
	console.log(
		`To get to the year ${secondYear} missing ${differenceYear} yaer`
	);
} else if (actualYear > secondYear) {
	console.log(
		`since the year ${secondYear} has passed ${differenceYear} year`
	);
} else if (actualYear === secondYear) {
	console.log("They are the same year");
}
