// Escriba un programa que pregunte cuantos números se van a introducir, pida esos números (que puedan ser decimales) y calcule su suma.
const prompt = require("prompt-sync")();

const amountOfValues = Number(
    prompt("How many values ​​are you going to enter?: ")
);
let sumadorNumero = 0;
if (amountOfValues <= 0) {
    console.log("Impossible!");
} else {

    for (let i = 1; i <= amountOfValues; i++) {
        let number = Number(prompt(`write the number ${i}: `))
        sumadorNumero += number;
    }
    console.log(`The sum of the numbers you have written is ${sumadorNumero}`)
}