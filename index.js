#! /usr/bin/env  node
import inquirer from "inquirer";
//computer generated number
// const guessingNumber = Math.floor(Math.random() * 10 + 1);
let numTries = 10;
//user input number 
while (numTries > 0) {
    const guessingNumber = Math.floor(Math.random() * 10 + 1);
    let userInput = await inquirer.prompt([{
            name: "userNumber",
            type: "number",
            message: "guess the number between 1-10 >"
        }]);
    if (userInput.userNumber === guessingNumber) {
        console.log("You Guessed Right ,\nGame Over");
        numTries = 0;
    }
    else {
        console.log(`You Guessed it wrong the correct number is : ${guessingNumber}`);
        if (guessingNumber > userInput.userNumber) {
            console.log("Think Higher");
        }
        else {
            console.log("Think Lower");
        }
        console.log(`You have ${numTries - 1} left`);
    }
    numTries--;
}
;
