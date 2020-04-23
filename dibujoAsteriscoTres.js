const prompt = require("prompt-sync")();

let heithg;
let astericos ="";

do {
  heithg = Number(prompt("Enter a number: "));

  if (isNaN(heithg)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(heithg));
astericos = astericos.padStart(heithg,"*");
astericos = astericos.padStart(heithg + heithg-1," ");

for (let i = 0; i < heithg-3; i++) {
  console.log(astericos);
  astericos += "**";
  astericos = astericos.substr(1);
 
}
for (let j = 0; j < heithg-2; j++) {
    console.log(astericos);
   astericos=" "+ astericos
    
    astericos = astericos.substr(0,astericos.length-2);
   
  }

