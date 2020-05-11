// Escriba un programa que pida un número entero mayor que 1 y que escriba si el número es un número primo o no.
const prompt = require("prompt-sync")();

const number = Number(prompt("Write a number greater than one: "));
let isPrime = true;
if (number < 1) {
    console.log("¡I have asked for an integer greater than 1!")
} else {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime === true) {
        console.log(`${number} is prime`);
    } else {
        console.log(`${number} not is prime`);
    }
}






