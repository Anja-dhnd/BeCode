//Display all even numbers between 1 and 100.

//Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times. The second one should use for and make a loop that will execute 50 times.

//version 1

var number = 1;

while (number <= 100) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number++;
}

//version 2

for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
