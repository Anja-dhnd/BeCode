// import constant

const readlineSync = require("readline-sync");

// import previous functions

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

let n = readlineSync.question("Please enter a number: ");
let arr = [];
let i = 0;

function multiRand() {
  while (i < n) {
    arr.push(rand10());
    i++;
  }
  return arr;
}
console.log(multiRand());

// create function to return the average
function average(arr) {
  let total = 0;
  let avg = 0;

  for (let n of arr) total += n;

  avg = total / arr.length;

  return avg;
}

// create function to return minimum

function min(arr) {
  return Math.min(...arr);
}

// create function to return maximum

function max(arr) {
  return Math.max(...arr);
}

//let nRand = new Number(readlineSync.question("Combien de nombre aléatoire ? : "))
let multiR = multiRand(n);
let minRand = min(multiR);
let maxRand = max(multiR);
let avgRand = average(multiR);

console.log(
  "Random numbers between 1 & 10: " +
    multiRand(n) +
    "\nMin : " +
    minRand +
    "\nMax : " +
    maxRand +
    "\nAverage : " +
    avgRand
);
