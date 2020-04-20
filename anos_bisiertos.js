const prompt = require("prompt-sync")();
let year;

do {
  year = parseInt(prompt("enter year: "));
  if (isNaN(year)) {
    console.log("invalid number");
  }
} while (isNaN(year));

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(anno + " leap-year.");
} else {
  console.log(year + " not leap-year");
}
