const readlineSync = require("readline-sync");

console.log("It works!!!");
let userName = readlineSync.question("Can you give me your name please?");
console.log("Hello " + userName);
