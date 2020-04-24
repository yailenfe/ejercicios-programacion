const prompt = require("prompt-sync")();
let identificationCard;

do {
  identificationCard = prompt("enter a  number: ");
  if (isNaN(identificationCard)) {
    console.log("error  number invalid");
  }
  if (identificationCard.length != 8) {
    console.log("error  number invalid");
  }
} while (isNaN(identificationCard) || identificationCard.length != 8);

let verificator =
  (Number(identificationCard[0]) * 8 +
    Number(identificationCard[1]) * 1 +
    Number(identificationCard[2]) * 2 +
    Number(identificationCard[3]) * 3 +
    Number(identificationCard[4]) * 4 +
    Number(identificationCard[5]) * 7 +
    Number(identificationCard[6]) * 6) %
  10;

if (Number(identificationCard[7]) === verificator) {
  console.log("the identificationCard is correct");
} else {
  console.log("the identificationCard is incorrect");
}
