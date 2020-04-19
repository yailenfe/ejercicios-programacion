const prompt = require("prompt-sync")();

let decimalnumber;

do {
  decimalnumber = prompt("Enter a number: ");

  if (isNaN(decimalnumber)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(decimalnumber));

const decimal = decimalnumber - parseInt(decimalnumber);
console.log(decimal);
