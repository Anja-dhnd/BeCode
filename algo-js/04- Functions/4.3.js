/* By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) 
that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate 
then display that same number of random numbers.*/

// import constant

const readlineSync = require("readline-sync");

// import function

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}
// state new function
let n = readlineSync.question(
  "Please enter the number of numbers you wish to generate: "
);
let arr = [];

function multiRand() {
  for (let i = 0; i < n; i++) {
    arr.push(rand10());
  }
  return arr;
}
console.log(multiRand());

// avec while

let a = 0;
function multiRand() {
  while (a < n) {
    arr.push(rand10());
    a++;
  }
  return arr;
}
console.log(multiRand());
