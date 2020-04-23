
const prompt = require("prompt-sync")();

let heithg;
let width;

do {
    heithg = prompt("Enter a number: ");

  if (isNaN(heithg)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(heithg));

do {
    width= prompt("Enter a number: ");

  if (isNaN(width)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(width));


for (let i = 0; i < heithg; i++) {
    for (let j = 0; j <width; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
  