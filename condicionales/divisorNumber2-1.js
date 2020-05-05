const prompt = require("prompt-sync")();
let dividendNumber;
let dividerNumber;

dividendNumber = Number(prompt("Enter a divident: "));
dividerNumber = Number(prompt("Enter a divider: "));

const rest = dividendNumber % dividerNumber;
const quotient = parseInt(dividendNumber / dividerNumber);

if (rest === 0) {
	console.log(`The division is exact. Quotient: ${quotient}`);
} else {
	console.log(
		`The division is not exact. Quotient: ${quotient} Rest: ${rest}`
	);
}
