const prompt = require("prompt-sync")();
numbers = [];
let input;

do {
  input = prompt("enter a number or the word 'exit'");
  if (!isNaN(input)) {
    numbers.push(Number(input));
  } else {
    if (input !== "exit") {
      console.log("error: number ivalid");
    }
  }
} while (input != "exit");
console.log(numbers.sort((a, b) => a - b));
