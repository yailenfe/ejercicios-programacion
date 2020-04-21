const prompt = require("prompt-sync")();
let character;

character = prompt("Enter a character: ");
if (!isNaN(character)) {
  console.log("Is a Number");
} else {
  if (
    (character >= "a" && character <= "z") ||
    (character >= "A" && character <= "Z")
  ) {
    if (character >= "A" && character <= "Z") {
      console.log("Is a capital letter");
    } else {
      console.log("Is a minuscule letter");
    }
  } else {
    console.log("it's neither of the two");
  }
}
