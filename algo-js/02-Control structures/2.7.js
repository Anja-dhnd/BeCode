/* Make a program that ask the user to enter a number named n. 
Then ask him n time to enter a new number. 
At the end display the sum of all the numbers collected this way.

Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.*/

const readlineSync = require("readline-sync");

let n = Number(readlineSync.question('Please enter a "n" number :'));

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += Number(readlineSync.question('Please enter a "n" number :'));
}

console.log("The sum is: ", sum);
