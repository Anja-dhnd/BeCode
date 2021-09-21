const readlineSync = require("readline-sync");

let name = readlineSync.question("Can you give me your full name please?");
console.log("Hello " + name);
let city = readlineSync.question("Where do you live?");
console.log("You live in " + city);
