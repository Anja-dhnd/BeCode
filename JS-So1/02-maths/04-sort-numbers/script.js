// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    // your code here
    var numbers = [2, 4, 14, 10, 90, 23, 16];

    numbers.sort(function (a, b) {
      return a - b;
    });

    alert(numbers);
  });
})();

/* 
SOLUCE 2
let numbers = document.getElementById("numbers");
        let value = numbers.value;
        let array = value.split(",");

        array.sort(function (a, b) { return parseInt(a) - parseInt(b) });
        alert(array);

    });


SOLUCE 3
let array= num.split(",")
let array = array.map(Number);
numbers.sort(function (a, b) {
  return a - b;
});*/
