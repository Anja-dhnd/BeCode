// Addition avec For

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("The sum is: ", sum);

// Addition avec reduce()

let array = [100, 101, 102];

sum = array.reduce((a, b) => {
  return a + b;
});

console.log("The sum is: ", sum);
