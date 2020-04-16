// Escriba un programa que pida al usuario que escriba su nombre, y lo salude llamándolo por su nombre.

const prompt = require("prompt-sync")();

let name = prompt("What is your name? ");
console.log("Hi,  " + name);
