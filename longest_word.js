const prompt = require("prompt-sync")();
let firstWord ;
let secundWord;

firstWord  = prompt("Enter first word: ");
secundWord = prompt("Enter secund word: ");
let extraCharacters = Math.abs(firstWord .length - secundWord.length);

if (firstWord .length > secundWord.length) {
  console.log(
    "The word " +
      firstWord  +
      "  has " +
      extraCharacters +
      " latters more than " +
      secundWord
  );
} else if (firstWord .length < secundWord.length) {
  console.log(
    "The word " +
      secundWord +
      "  has " +
      extraCharacters +
      " latters more than " +
      firstWord 
  );
} else {
  console.log("The words has the same length ");
}
