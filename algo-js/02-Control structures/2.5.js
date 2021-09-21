/* Make a program that asks the favorite number of the user. 
If that number is anything other than 42 display "Are you sure?" and ask again. 
(This program should never end as long as the user didn't chose 42).*/

const readlineSync = require("readline-sync");

let num = readlineSync.question("What is your favourite number? :");

while (num != 42) {
  num = readlineSync.question("Are you sure? What is your favourite number? :");
  if (num == 42) {
    console.log("Correct.");
  }
}
