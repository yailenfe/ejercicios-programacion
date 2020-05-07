const prompt = require("prompt-sync")();
const number = prompt("Enter a  number centimetres : ");

let message = `${number} centimetres is `;

if (number <= 0) {
	console.log("Write a distance greater than zero. ");
} else {
	const kilometres = Math.floor(number / 100000);
	const restKilometres = number % 100000;
	const meter = Math.floor(restKilometres / 100);
	const restMeter = restKilometres % 100;
	const centimeter = restMeter;

	if (kilometres > 0) {
		message += ` ${kilometres} km`;
	}

	if (meter > 0) {
		message += ` ${meter} m`;
	}

	if (centimeter > 0) {
		message += ` ${centimeter} cm`;
	}

	message += ".";

	console.log(message);
}
