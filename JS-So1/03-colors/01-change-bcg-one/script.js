// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)

/*(() => {
  // your code here
  document.getElementById("red").addEventListener("click", () => {});

  window.onload = function () {
    const btn = document.querySelector("button");
    btn.addEventListener("click", changeColor);
  };


  function changeColor() {
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0; 
    }
    document.body.style.backgroundColor = colors[colorIndex];
  }
})();*/

(() => {
  // your code here
  document.getElementById("red").addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
  });
  document.getElementById("green").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
  });
  document.getElementById("yellow").addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
  });
  document.getElementById("blue").addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
  });
})();
