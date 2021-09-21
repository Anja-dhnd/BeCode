/* Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

Examples:

    7 => nothing (it's a prime number)
    10 => 2 5
    9187 => nothing (it's a prime number too)
    134234 => 2 41 82 1637 3274 67117 */

const readlineSync = require("readline-sync");

let n = Number(readlineSync.question("Enter an integer: "));
let numDivisors = [];

function getDivisors(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 0 && i !== 1) numDivisors.push(i);
  }
}
getDivisors(n);
console.log(numDivisors);
