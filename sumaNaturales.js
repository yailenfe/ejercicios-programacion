const prompt = require("prompt-sync")();

let number;
let sumOne = 0;

do {
  number = Number(prompt("Enter a number: "));

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

for (let i = 0; i < number; i++) {
  sumOne += i + 1;
}
let sumSecond = (number * (number + 1)) / 2;

console.log(sumOne);

console.log(sumSecond);
if (sumOne === sumSecond) {
  console.log("They are same");
} else {
  console.log("they are not the same ");
}
