const prompt = require("prompt-sync")();
let quantityWord;
let biggestWord = "";
let smallestWord = "".padStart(100, "*");
do {
  quantityWord = prompt("Enter a number: ");

  if (isNaN(quantityWord)) {
    console.log("Error: Enter a valid number!");
  }
} while (isNaN(quantityWord));

for (i = 0; i < quantityWord; i++) {
  const word = prompt("Enter a word: ");
  if (word.length > biggestWord.length) {
    biggestWord = word;
  } else if (word.length < smallestWord.length) {
    smallestWord = word;
  }
}

console.log("the longest word it is " + biggestWord);
console.log("the shortest word is " + smallestWord);
