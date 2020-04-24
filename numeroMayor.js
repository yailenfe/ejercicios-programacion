const prompt = require("prompt-sync")();

let number;
let ordenumero = [];
do {
  number = prompt("Enter a number: ");

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

for (let i = 0; i < number; i++) {
  const num = Number(prompt("Enter a number: "));
  ordenumero.push(num);
}
console.log("The number is" + Math.max( ...ordenumero));
