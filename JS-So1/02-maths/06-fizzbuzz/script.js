// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

() => {
  // your code here
  a = 0;
  while (a < 100) {
    if (a % 3 == 0 && a % 5 == 0) {
      console.log("Fizzbuzz : " + a);
    } else if (a % 5 == 0) {
      console.log("buzz : " + a);
    } else if (a % 3 == 0);
    console.log("Fizz : " + a);
    a++;
  }
};
