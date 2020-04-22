const prompt = require("prompt-sync")();
let number;
let result = "";

do {
  number = Number(prompt("Enter a number: "));

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

for (let i = 0; i <= number; i++) {
  result += " " + Math.pow(2, i);
}
console.log(result);
