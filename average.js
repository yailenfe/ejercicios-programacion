// Escriba un programa que calcule el promedio de 4 notas ingresadas por el usuario:

const prompt = require("prompt-sync")();

const firstNote = parseInt(prompt("First Note: "));

const secundNote = parseInt(prompt("Secund Note: "));

const thirdaNota = parseInt(prompt("Third Note: "));

const fourthNota = parseInt(prompt("Fourth Note: "));

const sumaNotas = firstNote + secundNote + thirdaNota + fourthNota;

const averageNotas = sumaNotas / 4;
console.log("Average is: " + averageNotas);
