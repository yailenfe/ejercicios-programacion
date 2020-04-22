const prompt = require("prompt-sync")();
do {
    number = Number(prompt("enter a number: "));
    if (isNaN(number)) {
      console.log("invalid number");
    }
  } while (isNaN(number));

  for(let i=1;i<=number;i++){
      if(number%i===0){
        process.stdout.write(i + "   ");
      }
  }