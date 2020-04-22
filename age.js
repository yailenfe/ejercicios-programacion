const prompt = require("prompt-sync")();
let day;
let month;
let year;
console.log("write the date of birth");
do {
  day = prompt("day: ");
  if (isNaN(day) || day < 1 || day > 31) {
    console.log("error  number invalid");
  }
} while (isNaN(day) || day < 1 || day > 31);

do {
  month = prompt("month: ");
  if (isNaN(month) || month < 1 || month > 12) {
    console.log("error  number invalid");
  }
} while (isNaN(month) || month < 1 || month > 12);

do {
  year = prompt("year: ");
  if (isNaN(year) || year.length != 4) {
    console.log("error  number invalid");
  }
} while (isNaN(year) || year.length != 4);

let date = new Date(year, month - 1, day);
let ageDiFms = Date.now() - date;
let ageDate = new Date(ageDiFms);
let age = Math.abs(ageDate.getUTCFullYear() - 1970);

console.log("you have " + age + " years");
