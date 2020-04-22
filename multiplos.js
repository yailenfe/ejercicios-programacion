const prompt = require("prompt-sync")();
let number;

do {
  number = Number(prompt("Enter a number: "));

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}
