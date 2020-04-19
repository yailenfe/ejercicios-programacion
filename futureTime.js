// Escriba un programa que pregunte al usuario la hora actual t del reloj y un número entero de horas h, que indique qué hora marcará el reloj dentro de h horas:

const prompt = require("prompt-sync")();

let currentHour;
let number;

do {
  currentHour = parseInt(prompt("Enter the hour: "));

  if (isNaN(currentHour)) {
    console.log("Error: Enter a valid number!");
  }
  if (currentHour < 0 || currentHour > 23) {
    console.log("Error: Enter correct time!");
  }
} while (isNaN(currentHour) || currentHour < 0 || currentHour > 23);

do {
  number = parseInt(prompt("Enter a number: "));
  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
  if (number < 0) {
    console.log("Error: negative numbers are not allowed!");
  }
} while (isNaN(number) || number < 0);

const horaMarcadaReloj = (currentHour + number) % 24;
console.log(
  "In " + number + " hour, " + "the clock will mark the " + horaMarcadaReloj
);
