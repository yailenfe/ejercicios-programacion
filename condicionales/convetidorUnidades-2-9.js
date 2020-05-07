// Escriba un programa que pida una distancia en centímetros y que escriba esa distancia en kilómetros, metros y centímetros (escribiendo todas las unidades).
const prompt = require("prompt-sync")();
const number = prompt("Enter a  number centimetres : ");
let kilometres = Math.floor(number / 100000);
let restKilometres = number % 100000;
let meter = Math.floor(restKilometres / 100);
let restMeter = restKilometres % 100;
let centimeter = restMeter;

if (number <= 0) {
	console.log("Write a distance greater than zero. ");
} else {
	console.log(
		`${number}centimetres is ${kilometres} km ${meter} m ${centimeter} cm.`
	);
}
