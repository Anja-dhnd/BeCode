const readlineSync = require("readline-sync");
let questions = 3;
//console.count()
console.log(questions + " questions left.");
let one = readlineSync.question("What is your favourite country? ");
console.log(questions - 1 + " questions left.");
let two = readlineSync.question(
  "What is your favourite food from that place? "
);
console.log(questions - 2 + " question left.");
let three = readlineSync.question("What is your name?");
console.log(
  "In " +
    one +
    " they make delicious " +
    two +
    " but sometimes they run out of it in the all country because " +
    three +
    " goes there and eat all of it."
);
