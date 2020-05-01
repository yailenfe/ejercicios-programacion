const prompt = require("prompt-sync")();

do {
    number = Number(prompt("Enter a number: "));

    if (isNaN(number)) {
        console.log("Error: Enter a valid number!");
    }
} while (isNaN(number));

console.log(invertNumber(number));

if (numberPalindrome(number)) {
    console.log(`is Palindrome`);
} else {
    console.log(`not is Palindrome`);
}

function invertNumber(numero) {
    return Number(numero.toString().split("").reverse().join(""));
}

function numberPalindrome(numero1) {
    if (numero1 === invertNumber(numero1)) {
        return true;
    } else {
        return false;
    }
}
