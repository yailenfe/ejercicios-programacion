const prompt = require("prompt-sync")();
let sideA;
let sideB;
let sideC;

do {
  sideA = Number(prompt("enter a number: "));
  if (isNaN(sideA)) {
    console.log("invalid number");
  }
} while (isNaN(sideA));

do {
  sideB = Number(prompt("enter a number: "));
  if (isNaN(sideB)) {
    console.log("invalid number");
  }
} while (isNaN(sideB));

do {
  sideC = Number(prompt("enter a number: "));
  if (isNaN(sideC)) {
    console.log("invalid number");
  }
} while (isNaN(sideC));

const isValid =
  sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB;

if (isValid) {
  const isEquilatero = sideA === sideB && sideB === sideC;
  const isIsoceles = sideA === sideB || sideB === sideC || sideA === sideC;
  if (isEquilatero) {
    console.log("It's an equilateral triangle");
  } else if (isIsoceles) {
    console.log("Is an isoceles triangle");
  } else {
    console.log("It's a scalene triangle");
  }
} else {
  console.log("It is not valid");
}
