const readlineSync = require("readline-sync");

//let x = 32
//let y = x / 31
//console.log(Math.trunc(y))

let div = readlineSync.question("Divide 15 by 2 :");
console.log("The integer is " + Math.trunc(div));
let mult = readlineSync.question("How many days are there in a week? ");
console.log(
  "Your first answered multiplied by your second equals " +
    Math.trunc(div) * mult
);
