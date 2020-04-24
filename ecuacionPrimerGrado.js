const prompt = require("prompt-sync")();
let coefficientA;
let coefficientB;

do {
  coefficientA = Number(prompt("enter coefficientA: "));
  if (isNaN(coefficientA)) {
    console.log("invalid number");
  }
} while (isNaN(coefficientA));
do {
  coefficientB = Number(prompt("enter coefficientB: "));
  if (isNaN(coefficientB)) {
    console.log("invalid number");
  }
} while (isNaN(coefficientB));

let ecuecion = 0 - coefficientB / coefficientA;

if (coefficientA === 0 && coefficientB === 0) {
  console.log("there is no unique solution");
} else if (coefficientA === 0 && coefficientB > 0) {
  console.log("without solution");
} else {
  console.log("the solution is" + ecuecion);
}
