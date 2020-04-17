// Escriba un programa que pida al usuario un entero de tres dígitos, y entregue el número con los dígitos en orden inverso:

const prompt = require("prompt-sync")();

let number = parseInt(prompt("three digit number: "));

const firstDigit = (number % 10).toString();

number = parseInt(number / 10);
const secondDigit = (number % 10).toString();
number = parseInt(number / 10);
const thirdDigit = (number % 10).toString();

console.log(firstDigit + secondDigit + thirdDigit);
