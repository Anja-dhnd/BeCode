// Make a program that asks for an integer n and generates the n first Fibonacci numbers.

// Yes, you'll have to search what the hell are Fibonacci numbers.

const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter an integer: ");

let i;
let fib = []; // Initialize array

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= n; i++) {
  // Next fibonacci number = previous + one before previous

  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
