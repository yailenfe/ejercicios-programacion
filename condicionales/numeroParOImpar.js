// Escriba un programa que pida primero un número par y luego un número impar (positivos o negativos). En caso de que uno o los dos valores no sea correcto, se mostrará un único aviso.
const prompt = require("prompt-sync")();

let numberEven;
let numberOdd;

numberEven = Number(prompt("Enter a Even number: "));
numberOdd = Number(prompt("Enter a Odd number: "));

if (numberEven % 2 === 0 && numberOdd % 2 != 0) {
      console.log("Thank you for your cooperation!");
} else {
      console.log(
            `No or more of the values ​​you have entered are not correct`
      );
      console.log(`Please run the program again to try again`);
}
