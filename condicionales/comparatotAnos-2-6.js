// Escriba un programa que pida un año y que escriba si es bisiesto o no.Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.
const prompt = require('prompt-sync')();
let year;

year = Number(prompt('Write a year and I will tell you if it is leap: '));
if (year % 400 === 0) {
	console.log(
		`The year ${year} is a leap year because it is a multiple of 400.`
	);
} else if (year % 100 === 0) {
	console.log(
		`The year ${year} is not a leap year because it is a multiple of 100 without being a multiple of 400`
	);
} else if (year % 4 === 0) {
	console.log(
		`The year ${year} is a leap year because it is a multiple of 4 without being a multiple of 100.`
	);
} else {
	console.log(`
    The year ${year} is not a leap year.`);
}
