/*Create a function named calcDistance which takes the coordinates of two different points A and B 
in a 2D space. That function must return the distance between those two points.*/

// import constant

const readlineSync = require("readline-sync");

//state function

function calcDistance(ax, bx, ay, by) {
  let A = bx - ax;
  let B = by - ay;
  return Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
}

//Math.sqrt((Math.pow(point.x-this.x,2))+(Math.pow(point.y-this.y,2)))
//      return distance;

//Create a program to use that function.

let ax = Number(readlineSync.question("Give the x axis for point A : "));
let bx = Number(readlineSync.question("Give the x axis for point B : "));
let ay = Number(readlineSync.question("Give the y axis for point A: "));
let by = Number(readlineSync.question("Give the y axis for point B : "));

//Show result

console.log(calcDistance(ax, bx, ay, by));
