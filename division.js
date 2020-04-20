const prompt = require("prompt-sync")();
let numberFirst;
let numberSecund;

do {
  numberFirst = parseInt(prompt("enter number: "));
  if (isNaN(numberFirst)) {
    console.log("invalid number");
  }
} while (isNaN(numberFirst));

do {
  numberSecund = parseInt(prompt("enter number: "));
  if (isNaN(numberSecund)) {
    console.log("invalid number");
  }
} while (isNaN(numberSecund));

let rest = numberFirst % numberSecund;
let quotient = parseInt(numberFirst / numberSecund);

if (rest === 0) {
  console.log("the division is exact ");
} else {
  console.log("the division is not exact ");
}

console.log("Quotient: " + quotient);
console.log("Rest: " + rest);
