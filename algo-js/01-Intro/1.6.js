const readlineSync = require("readline-sync");

let one = readlineSync.question("Can you give me an integer please? ");
let two = readlineSync.question("Can you give me an other one please? ");
console.log("The rest of their division is " + (one % two));
