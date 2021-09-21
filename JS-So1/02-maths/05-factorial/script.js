// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", () => {
    // your code here

    var a = document.getElementById("number").value;
    
    function factorial(number) {
      if (number < 0) return -1;
      else if (number == 0) return 1;
      else {
        return number * factorial(number - 1);
      }
    }
    
  });
})();


----- 

function factor(a) {
    if (a === 0 || a === 1) return 1;
    for (let i = a - 1; i >= 1; i--) {
      a *= i;
    }
    return a;
  }
  
