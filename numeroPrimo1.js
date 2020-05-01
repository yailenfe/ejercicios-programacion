const prompt = require("prompt-sync")();
let number;
let cantPrimes = 0;

do {
    number = prompt("Enter a number: ");
    if (isNaN(number)) {
        console.log("Number invalid!");
    }
} while (isNaN(number));

for (let i = 2; cantPrimes < number; i++) {
  
    let esPrime = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          esPrime = false;
        }
    }
    
    if (esPrime) {
      console.log(i);
      cantPrimes++;
    }
  }