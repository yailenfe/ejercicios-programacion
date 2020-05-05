// Mejore el programa anterior haciendo que tenga en cuenta que no se puede dividir por cero:

const prompt = require("prompt-sync")();

const dividendNumber = Number(prompt("Enter a divident: "));
const dividerNumber = Number(prompt("Enter a divider: "));

const rest = dividendNumber % dividerNumber;
const quotient = parseInt(dividendNumber / dividerNumber);

if (dividerNumber === 0) {
	console.log("cannot be divided by zero");
} else if (rest === 0) {
	console.log(`The division is exact. Quotient: ${quotient}`);
} else {
	console.log(
		`The division is not exact. Quotient: ${quotient} Rest: ${rest}`
	);
}
