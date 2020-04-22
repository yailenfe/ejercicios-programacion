const prompt = require("prompt-sync")();
let travel = 0;
let stretch;
do {
  do {
    stretch = Number(prompt("Enter a stretch: "));

    if (isNaN(stretch)) {
      console.log("Error: Enter a valid number!");
    }
  } while (isNaN(stretch));

  if (stretch != 0) {
    travel += stretch;
  }
} while (stretch != 0);

let time = parseInt(travel / 60);
let minut = travel % 60;
console.log(
  "Time total of travel is " +
    time +
    ":" +
    minut.toString().padStart(2, 0) +
    " hour"
);
