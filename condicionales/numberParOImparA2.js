const prompt = require("prompt-sync")();

let evenNumber;
let oddNumber;

evenNumber = Number(prompt("Enter a even number: "));
if (evenNumber % 2 !== 0) {
	console.log(`You have not written an even number.`);
	console.log(`Please run the program again to try again.`);
}

oddNumber = Number(prompt("Enter a odd number: "));
if (oddNumber % 2 === 0) {
	console.log(`You have not written an odd number.`);
	console.log(`Please run the program again to try again.`);
}

if (evenNumber % 2 === 0 && oddNumber % 2 !== 0) {
	console.log("Thank you for your cooperation!");
}
