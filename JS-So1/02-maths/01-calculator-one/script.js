// 02-maths/01-calculator-one/script.js - 2.1: calculator1

() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", function () {
    // perform an addition

    let a = Number(document.getElementById("opOne").value);
    let b = Number(document.getElementById("opOne").value);
    let result = a + b;

    alert(result);
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      // perform an substraction
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      // perform an multiplication
    });

  document.getElementById("division").addEventListener("click", function () {
    // perform an division
  });
};
