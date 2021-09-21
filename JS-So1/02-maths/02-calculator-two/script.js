// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

// A CHECK AGAIN

() => {
  // to get the value of an input: document.getElementById("element-id").value

  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2)").value);

  const performOperation = (operation) => {
    // perform the operation
    const calculate = (operation) => {
      const [num1, operation, num2] = opr.split(" ");
      switch (operation) {
        case "add":
          result = a + b;
          alert(result);
          break;
        case "divide":
          result = a / b;
          alert(result);
          break;
        case "subtract":
          result = a - b;
          alert(result);
          break;
        case "multiply":
          result = a * b;
          alert(result);
          break;
        case "modulo":
          result = a % b;
          alert(result);
          break;
        default:
          return 0;
      }
    };
    Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
      $btn.addEventListener("click", () => (performOperation($btn.id), false))
    );
  };
};
