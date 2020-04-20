const prompt = require("prompt-sync")();

let contestOne;
let contestTwo;
let contestLab;
const FINAL_NOTE = 60;
const MAX_NOTE = 100;
const MIN_NOTE = 0;

do {
  contestOne = parseFloat(prompt("Enter the contest one: "));

  if (isNaN(contestOne)) {
    console.log("Error: Enter a valid number!");
  }
  if (contestOne < MIN_NOTE || contestOne > MAX_NOTE) {
    console.log("Error: Enter correct number!");
  }
} while (isNaN(contestOne) || contestOne < MIN_NOTE || contestOne > MAX_NOTE);

do {
  contestTwo = parseFloat(prompt("Enter the contest Two: "));

  if (isNaN(contestTwo)) {
    console.log("Error: Enter a valid number!");
  }
  if (contestTwo < MIN_NOTE || contestTwo > MAX_NOTE) {
    console.log("Error: Enter correct number!");
  }
} while (isNaN(contestTwo) || contestTwo < MIN_NOTE || contestTwo > MAX_NOTE);

do {
  contestLab = parseFloat(prompt("Enter the contest Lab: "));

  if (isNaN(contestLab)) {
    console.log("Error: Enter a valid number!");
  }
  if (contestLab < MIN_NOTE || contestLab > MAX_NOTE) {
    console.log("Error: Enter correct number!");
  }
} while (isNaN(contestLab) || contestLab < MIN_NOTE || contestLab > MAX_NOTE);

const contesthree =
  (3 * (FINAL_NOTE - contestLab * 0.3)) / 0.7 - contestOne - contestTwo;

if (contesthree > MAX_NOTE) {
  console.log("it's too late");
} else {
  console.log("Need note " + contesthree.toFixed(2) + " in contest three");
}
