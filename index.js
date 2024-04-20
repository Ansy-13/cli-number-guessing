#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answer.userguessedNumber === randomNumber) {
    console.log("congratulation you gussed the right number");
}
else {
    console.log("you gussed the wrong number");
}
