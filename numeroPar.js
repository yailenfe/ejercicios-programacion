const prompt = require("prompt-sync")();
let number;
do {
    number = prompt("Enter a number: ");

    if (isNaN(number)) {
        console.log("Error: Enter a valid number!");
    }
} while (isNaN(number));

console.log(isPar(number));

function isPar(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
