const prompt = require("prompt-sync")();

let height;
let weighs;
let age;

do {
  height = Number(prompt("Enter the height (m): "));

  if (isNaN(height)) {
    console.log("Error: Enter a valid number!");
  } else if (height >= 3.0) {
    console.log("heigth inavlid");
  }
} while (isNaN(height) || height >= 3.0);

do {
  weighs = Number(prompt("Enter the weighs (kg): "));

  if (isNaN(weighs)) {
    console.log("Error: Enter a valid number!");
  } else if (weighs >= 250) {
    console.log("enter weighs correct");
  }
} while (isNaN(weighs));

do {
  age = Number(prompt("Enter the age: "));

  if (isNaN(age)) {
    console.log("Error: Enter a valid number!");
  } else if (age > 150) {
    console.log("enter age correct");
  }
} while (isNaN(age) || age > 150);

const IMC = weighs / (height * height);

if (age < 45 && IMC < 22.0) {
  console.log("his condition is underweight");
} else if (age < 45 && IMC >= 22.0) {
  console.log("his condition is medium");
} else if (age < 45 && IMC >= 22.0) {
  console.log(" his condition is medium");
} else if (age >= 45 && IMC >= 22.0) {
  console.log("his condition is high");
}
