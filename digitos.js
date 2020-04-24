const prompt = require("prompt-sync")();
let number;
do {
  number = prompt("enter a number: ");
  if (isNaN(number)) {
    console.log("error  number invalid");
  }
} while (isNaN(number));

console.log(number + " has " + number.length + " digits");
