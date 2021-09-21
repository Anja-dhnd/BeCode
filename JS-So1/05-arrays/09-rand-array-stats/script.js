// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    let i = 1;
    let array = [];
    while (i <= 10) {
      array.push(Math.floor(Math.random() * 100) + 1);
      i++;
    }

    document.getElementById("n-1").innerHTML = array[0];
    document.getElementById("n-2").innerHTML = array[1];
    document.getElementById("n-3").innerHTML = array[2];
    document.getElementById("n-4").innerHTML = array[3];
    document.getElementById("n-5").innerHTML = array[4];
    document.getElementById("n-6").innerHTML = array[5];
    document.getElementById("n-7").innerHTML = array[6];
    document.getElementById("n-8").innerHTML = array[7];
    document.getElementById("n-9").innerHTML = array[8];
    document.getElementById("n-10").innerHTML = array[9];
  });
})();
