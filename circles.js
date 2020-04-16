// Escriba un programa que reciba como entrada el radio de un círculo y entregue como salida su perímetro y su área:

// formula Perimetro = 2(3,14163.)*r

//  formula Area = (3,14163.)*r^2

const prompt = require("prompt-sync")();

const PI = 3.14163;

const radius = prompt("Enter the Radius: ");
const perimeter = Math.round(2 * PI * radius);
const area = Math.round(PI * radius * radius);

console.log("Perimeter: " + perimeter);
console.log("Area: " + area);
