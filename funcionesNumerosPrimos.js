const prompt = require("prompt-sync")();
let numberFirst;
let numberSecund;

do {
    numberFirst = parseInt(prompt("enter number: "));
    if (isNaN(numberFirst)) {
        console.log("invalid number");
    }
} while (isNaN(numberFirst));

do {
    numberSecund = parseInt(prompt("enter number: "));
    if (isNaN(numberSecund)) {
        console.log("invalid number");
    }
} while (isNaN(numberSecund));

if (divisible(numberFirst, numberSecund)) {
    console.log(` True`);
} else {
    console.log(`False`);
}

function divisible(dividend, divisor) {
    return dividend % divisor === 0;
}
