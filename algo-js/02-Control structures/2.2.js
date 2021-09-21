const readlineSync = require("readline-sync");

let min = readlineSync.question("Please enter a small number :");
let max = readlineSync.question("Please enter bigger one :");
let current = readlineSync.question("Please enter another number :");

if (current > min && current < max) {
  console.log("Good job!");
} else if (min > max) {
  console.log("You do not understand, just exit the program.");
} else {
  console.log("Try again...");
}
