// Escriba un programa que pida primero un número par y luego un número impar (positivos o negativos). En caso de que uno o los dos valores no sea correcto, se mostrará un único aviso.
const prompt = require("prompt-sync")();

let numberPair;
let numberOdd;

do {
    numberPair = parseInt(prompt("Enter a number Pair: "));
  
    if (isNaN(numberPair)) {
      console.log("Error: Enter a valid number!");
    }
  } while (isNaN(numberPair));
  do {
    numberOdd = parseInt(prompt("Enter a number Odd: "));
  
    if (isNaN(numberOdd)) {
      console.log("Error: Enter a valid number!");
    }
  } while (isNaN(numberOdd));

  if (numberPair % 2 === 0 && numberOdd % 2 !=0) {
    console.log("Thank you for your cooperation!");
  } else {
    console.log("no or more of the values ​​you have entered are not correct.Please run the program again to try again");
  }
  