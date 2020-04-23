const prompt = require("prompt-sync")();

let heithg;
let astericos = "*";

do {
  heithg = prompt("Enter a number: ");

  if (isNaN(heithg)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(heithg));

for (let i = 0; i < heithg; i++) {
  console.log(astericos);
  astericos += "*";
}

