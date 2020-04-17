// Escriba un programa que convierta de centímetros a pulgadas. Una pulgada es igual a 2.54 centímetros.
const prompt = require("prompt-sync")();

const length = prompt("Enter length: ");
const CENTIMETRES_BY_INCH = 2.54;
const convergence = parseFloat(length / CENTIMETRES_BY_INCH).toFixed(4);

console.log(length + " cm " + "= " + convergence + " in ");
