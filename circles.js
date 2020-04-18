// Escriba un programa que reciba como entrada el radio de un círculo y entregue como salida su perímetro y su área:

// formula Perimetro = 2(3,14163.)*r

//  formula Area = (3,14163.)*r^2

const prompt = require("prompt-sync")();

const PI = 3.14163;

let radius;
let isValid = true;

do {
  radius = prompt("Enter the Radius: ");

  if (isNaN(radius)) {
    isValid = false;
    console.log("Error: Enter a valid radius!");
  } else {
    isValid = true;
  }
} while (isValid === false);

const perimeter = parseFloat(2 * PI * radius).toFixed(2);
const area = parseFloat(PI * radius * radius).toFixed(2);

console.log("Perimeter: " + perimeter);
console.log("Area: " + area);
