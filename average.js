// Escriba un programa que calcule el promedio de 4 notas ingresadas por el usuario:

const prompt = require("prompt-sync")();

let firstNote;
let secundNote;
let thirdaNota;
let fourthNota;

do {
  firstNote = parseInt(prompt("First Note: "));
  if (isNaN(firstNote)) {
    console.log("invalid number");
  }
} while (isNaN(firstNote));

do {
  secundNote = parseInt(prompt("Secund Note: "));
  if (isNaN(secundNote)) {
    console.log("invalid number");
  }
} while (isNaN(secundNote));

do {
  thirdaNota = parseInt(prompt("Third Note: "));
  if (isNaN(thirdaNota)) {
    console.log("invalid number");
  }
} while (isNaN(thirdaNota));

do {
  fourthNota = parseInt(prompt("Fourth Note: "));
  if (isNaN(fourthNota)) {
    console.log("invalid number");
  }
} while (isNaN(fourthNota));

const sumaNotas = firstNote + secundNote + thirdaNota + fourthNota;

const averageNotas = sumaNotas / 4;
console.log("Average is: " + averageNotas);
