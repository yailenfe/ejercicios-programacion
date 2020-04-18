// Escriba un programa que pida al usuario que escriba su nombre, y lo salude llamándolo por su nombre.

const prompt = require("prompt-sync")();
let name;
let isValid = true;
do {
  name = prompt("What is your name? ").trim();
  if (name === "") {
    isValid = false;
    console.log("Error: Enter a valid name!");
  } else {
    isValid = true;
  }
} while (isValid === false);

console.log("Hi, " + name);
