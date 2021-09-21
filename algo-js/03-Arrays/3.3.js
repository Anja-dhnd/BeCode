/* Write a program that will create a duplicate of a given array.

Bonus: make a first version that will only do it using push(). 
Make a second version that uses a single method call to perform the copy. 
(You'll have to search on the MDN or Google for this one.) */

// Version 1

let array = [100, 101, 102];

array.push(100, 101, 102);

console.log(array);

// Version 2

let arr = [2, 4, 6, 8, 10];

let arrcopy = [...arr];

console.log(arr, arrcopy);

// Version 3

let originalArray = [1, 2, 3, 4, 5];
let clone = originalArray.slice();

console.log(originalArray, clone);

// Version 4

let orig = [10, 20, 30, 40, 50];
let dupli = [].concat(orig);

console.log(orig, dupli);
