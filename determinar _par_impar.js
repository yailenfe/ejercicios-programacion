const prompt = require("prompt-sync")();
let number;

do {
  number = parseInt(prompt("Enter a number: "));

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

if (number % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}
