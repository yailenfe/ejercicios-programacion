const prompt = require("prompt-sync")();
let number;
let resto;

do {
  number = Number(prompt("Enter a number: "));

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

for (let i = 1; i <= number; i++) {
  if (i % 3 != 0 && i % 7 != 0) {
    console.log(i);
  }
}
