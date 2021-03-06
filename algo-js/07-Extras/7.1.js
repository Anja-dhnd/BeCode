/* Make a program that generates an integer between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the user to guess. 
If the user enters a number which is too low it should display "Too low" and re-ask the question. 
If the user enters a number which is too high it should display "Too high" and re-ask the question. 
If the user guess correctly it should display "Well guessed!" and exit. */

const readlineSync = require("readline-sync");

const random = Math.floor(Math.random() * 100);

let number = readlineSync.question("Guess the number: ");

while (number != random) {
  if (number < random) {
    console.log("Too low, try again.");
    number = readlineSync.question("Guess the number: ");
  } else {
    console.log("Too high, try again.");
    number = readlineSync.question("Guess the number: ");
  }
}

console.log("Well guessed!");
