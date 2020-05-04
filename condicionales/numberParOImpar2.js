// Escriba un programa que pida primero un número par (positivo o negativo) y si el valor no es correcto, muestre un aviso. Si el valor es correcto, pedirá un número impar (positivo o negativo) y si el valor no es correcto, mostrará un aviso.
const prompt = require("prompt-sync")();

let numberEven;
let numberOdd;

do {
      numberEven = Number(prompt("Enter a number Pair: "));

      if (numberEven % 2 != 0) {
            console.log(`Error: not write number pair`);
            console.log(` Please run the program again to try again.`);
      }
} while (numberEven % 2 != 0);
do {
      numberOdd = Number(prompt(`Enter a number Odd:`));

      if (numberOdd % 2 === 0) {
            console.log(`Error: write a number Odd`);
            console.log(` Please run the program again to try again.`);
      }
} while (numberOdd % 2 === 0);

if (numberEven % 2 === 0 && numberOdd % 2 != 0) {
      console.log(`Thank you for your cooperation!`);
}
