const prompt = require("prompt-sync")();

let pointsPlayerA = 0;
let pointsPlayerB = 0;

do {
    let optionA;
    let optionB;

    do {
        optionA = prompt("A: Enter rock, paper or scissor ");
        if (isNotOptionValid(optionA)) {
            console.error("Invalid option!");
        }
    } while (isNotOptionValid(optionA));

    do {
        optionB = prompt("B: Enter rock, paper or scissor ");
        if (isNotOptionValid(optionB)) {
            console.error("Invalid option!");
        }
    } while (isNotOptionValid(optionB));

    if (optionA === "scissor" && optionB === "paper") {
        pointsPlayerA++;
    } else if (optionB === "scissor" && optionA === "paper") {
        pointsPlayerB++;
    } else if (optionA === "paper" && optionB === "rock") {
        pointsPlayerA++;
    } else if (optionB === "paper" && optionA === "rock") {
        pointsPlayerB++;
    } else if (optionA === "rock" && optionB === "scissor") {
        pointsPlayerA++;
    } else if (optionB === "rock" && optionA === "scissor") {
        pointsPlayerB++;
    }

    console.log(`A: ${pointsPlayerA} - B: ${pointsPlayerB}`);
} while (pointsPlayerA < 3 && pointsPlayerB < 3);

if (pointsPlayerA >= 3 && pointsPlayerA > pointsPlayerB) {
    console.log("A is the winner");
} else if (pointsPlayerB >= 3 && pointsPlayerB > pointsPlayerA) {
    console.log("B is the winner");
} else {
    console.log("There is not a winner");
}

function isOptionValid(option) {
    return ["rock", "paper", "scissor"].includes(option);
}

function isNotOptionValid(option) {
    return !isOptionValid(option);
}
