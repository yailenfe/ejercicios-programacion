const prompt = require("prompt-sync")();
let numberfirst;
let numbersecond;
let operator;

do {
  numberfirst = Number(prompt("Enter a first numebr: "));
  if (isNaN(numberfirst)) {
    console.log("Error: enter number valid");
  }
} while (isNaN(numberfirst));

do {
  operator = prompt("select an operator from these {+,-,/,*}: ");
  if (
    operator != "+" &&
    operator != "-" &&
    operator != "*" &&
    operator != "/"
  ) {
    console.log("Error: enter operator valid");
  }
} while (
  operator != "+" &&
  operator != "-" &&
  operator != "*" &&
  operator != "/"
);

do {
  numbersecond = Number(prompt("Enter a secund numebr: "));
  if (isNaN(numbersecond)) {
    console.log("Error: enter number valid");
  }
} while (isNaN(numbersecond));

switch (operator) {
  case "+":
    console.log(
      numberfirst + " + " + numbersecond + " = " + (numberfirst + numbersecond)
    );
    break;
  case "-":
    console.log(
      numberfirst + " - " + numbersecond + " = " + (numberfirst - numbersecond)
    );
    break;
  case "*":
    console.log(
      numberfirst + " * " + numbersecond + " = " + numberfirst * numbersecond
    );
    break;
  case "/":
    console.log(
      numberfirst + " / " + numbersecond + " = " + numberfirst / numbersecond
    );
    break;
  default:
    console.log("invalid operator");
}
