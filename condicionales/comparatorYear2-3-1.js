// Mejore el programa anterior haciendo que cuando la diferencia sea exactamente un año, escriba la frase en singular:
const prompt = require("prompt-sync")();

const actulYear = Number(prompt("Enter the actul year: "));
const secundYear = Number(prompt("Enter the second year: "));

let difenciaYear = Math.abs(actulYear - secundYear);

if (actulYear < secundYear && difenciaYear === 1) {
	console.log(`To reach year ${secundYear} lack ${difenciaYear} year`);
} else if (actulYear < secundYear) {
	console.log(
		`To get to the year ${secundYear} missing ${difenciaYear} yaer`
	);
} else if (actulYear > secundYear) {
	console.log(`since the year ${secundYear} has passed ${difenciaYear} year`);
} else if (actulYear === secundYear) {
	console.log("They are the same year");
}
