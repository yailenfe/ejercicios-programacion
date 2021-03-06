const prompt = require("prompt-sync")();
let number;
let isPrime = true;

do {
    number = prompt("Enter a number: ");
    if (isNaN(number)) {
        console.log("Number invalid!");
    }
} while (isNaN(number));

for (i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
    }
}

if (isPrime === true) {
    console.log(`${number} is prime`);
} else {
    console.log(`${number} is compound`);
}
