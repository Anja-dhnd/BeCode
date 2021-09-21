const readlineSync = require("readline-sync");

let one = readlineSync.question("What is your shoe size? ");
let two = readlineSync.question("What is your birth year? ");
let three = one * 2;
let four = three * 50;
let five = four - two;
let six = five + 1766;
console.log(six);
