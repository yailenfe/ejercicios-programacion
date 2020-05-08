// Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y muestre un mensaje cada vez que un número no sea mayor que el anterior
const prompt = require("prompt-sync")();
const amountOfValues = Number(
	prompt("How many values ​​are you going to enter?: ")
);

if (amountOfValues < 0) {
	console.log("Impossible!");
} else {
	let anterior;
	for (i = 0; i < amountOfValues; i++) {
		if (i === 0) {
			anterior = Number(prompt("Write a number: "));
		} else {
			let valor = Number(
				prompt(`  Write a number larger than ${anterior} :  `)
			);
			if (valor <= anterior) {
				console.log(` !${valor} not is higher than ${anterior} `);
			}
			anterior = valor;
		}
	}
	console.log("Thank you for your cooperation");
}
