// 02-maths/03-even-square/script.js - 2.3: squares and pairs

(() => {
  document.getElementById("run").addEventListener("click", () => {
    // your code here

    var numberArray = [];

    for (var a = 1; a <= 22; a++) {
      numberArray.push(Math.sqrt(a));
    }
    alert(numberArray);
  });
})();
