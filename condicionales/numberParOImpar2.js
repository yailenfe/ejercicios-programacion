// Escriba un programa que pida primero un número par (positivo o negativo) y si el valor no es correcto, muestre un aviso. Si el valor es correcto, pedirá un número impar (positivo o negativo) y si el valor no es correcto, mostrará un aviso.

const prompt = require("prompt-sync")();

let numberPair;
let numberOdd;

do {
    numberPair = parseInt(prompt("Enter a number Pair: "));

    if (isNaN(numberPair)) {
        console.log(`Error: Enter a valid number!`);
    } else if (numberPair % 2 != 0) {
        console.log(`Error: not write number pair`);
        console.log(` Please run the program again to try again.`);
    }
} while (isNaN(numberPair) || numberPair % 2 != 0);
do {
    numberOdd = parseInt(prompt(`Enter a number Odd:`));

    if (isNaN(numberOdd)) {
        console.log(`Error: Enter a valid number!`);
    } else if (numberOdd % 2 === 0) {
        console.log(`Error: write a number Odd`);
        console.log(` Please run the program again to try again.`);
    }
} while (isNaN(numberOdd) || numberOdd % 2 === 0);

if (numberPair % 2 === 0 && numberOdd % 2 != 0) {
    console.log(`Thank you for your cooperation!`);
} else {
    console.log(
        `no or more of the values ​​you have entered are not correct.Please run the program again to try again`
    );
}
