const prompt = require("prompt-sync")();
let numberFirst;
let numberSecond;
let sum = 0;

do {
  numberFirst = Number(prompt("Enter a number: "));

  if (isNaN(numberFirst)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(numberFirst));

do {
  numberSecond = Number(prompt("Enter a number: "));

  if (isNaN(numberSecond)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(numberSecond));

if (numberFirst < numberSecond) {
  for (let i = numberFirst + 1; i < numberSecond; i++) {
    sum += i;
  }
} else{
    for (let i = numberFirst-1; i > numberSecond; i--) {
        sum += i;
      }
}
  
console.log("The sum is " + sum);
