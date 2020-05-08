// Escriba un programa que pida los coeficientes de una ecuación de primer grado (a x + b = 0) y escriba la solución.Se recuerda que una ecuación de primer grado puede no tener solución, tener una solución única, o que todos los números sean solución. Se recuerda que la fórmula de las soluciones es x = -b / a
const prompt = require("prompt-sync")();

const coefficientA = Number(prompt("Write the value of the coefficient A: "));
const coefficientB = Number(prompt("Write the value of the coefficient B: "));

let equation = 0 - coefficientB / coefficientA;

if (coefficientA === 0 && coefficientB === 0) {
	console.log("All numbers are solution");
} else if (coefficientA === 0 && coefficientB > 0) {
	console.log("The equation has not solution");
} else if (coefficientB === 0 && coefficientA > 0) {
	console.log("The equation has not solution");
} else {
	console.log(`The equation has a solution: ${equation}`);
}
