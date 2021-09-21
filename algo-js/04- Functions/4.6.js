//Create a function factorial(a) that returns the factorial of a number.

//That function must be recursive.

const readlineSync = require("readline-sync");
let num = readlineSync.question("Enter a number : ");

// factorialize with recursion

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(num));

// factorialize with a WHILE loop

let n = readlineSync.question("Enter a number : ");

function factorialize(n) {
  let result = n;
  if (n === 0 || n === 1) return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}

console.log(factorialize(n));

// factorialize with a FOR loop

let a = readlineSync.question("Enter a number : ");

function factor(a) {
  if (a === 0 || a === 1) return 1;
  for (let i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
}

console.log(factor(a));
