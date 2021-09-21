// Write a program that will calculate the average value of a given array.

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((previous, current) => (current += previous));
let avg = sum / arr.length;

console.log(avg);

// v2

let array = [100, 101, 102];
let count = array.length;

array = array.reduce((previous, current) => (current += previous));
let average = (array /= count);

console.log(average);
