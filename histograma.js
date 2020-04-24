const prompt = require("prompt-sync")();
let number
let contPositivo=0
let contNegativo=0

do {
    number = Number(prompt("Enter a number: "));
  
    if (isNaN(number)) {
      console.log("Error: Enter a valid number!");
    }else if(number!=0){
        if(number<0){
            contNegativo++
        }else{
            contPositivo++
        }
    }
   
  } while (isNaN(number) || number!=0 );

  console.log("positivos"+ "".padStart(contPositivo,"*"))
  console.log("negativos"+ "".padStart(contNegativo,"*"))


  