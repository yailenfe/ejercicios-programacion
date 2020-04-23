const prompt = require("prompt-sync")();
let number;
let cont = 0;

do {
  number = prompt("Enter a number: ");

  if (isNaN(number)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(number));

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
      if(i+j==number){
        cont++;
      }
    
  }
}
console.log("there are " + cont + " combinations for "+ number)