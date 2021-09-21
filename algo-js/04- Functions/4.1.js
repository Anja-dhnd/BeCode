/* Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
Then create a program that asks the length and width of a rectangle to the user then displays the surface 
of that rectangle. That program must use the function you created.

Write a documentation for the calcSurface function. */

// import constant

const readlineSync = require("readline-sync");

// function

function calcSurface(length, width) {
  return length * width;
}

//variable

let length = new Number(readlineSync.question("Please enter a length: "));
let width = new Number(readlineSync.question("Please enter a width: "));
let surface = calcSurface(length, width);

console.log("Surface of the rectangle: " + surface);
