// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    var passOne = document.getElementById("pass-one").value;
    var passTwo = document.getElementById("pass-two").value;
    if (passOne == passTwo) {
      document.getElementById("pass-one").style.borderColor = "green";
      document.getElementById("pass-two").style.borderColor = "green";
      document.getElementById("pass-one").removeAttribute("class", "Error");
      document.getElementById("pass-two").removeAttribute("class", "Error");
    } else {
      document.getElementById("pass-one").style.borderColor = "red";
      document.getElementById("pass-two").style.borderColor = "red";
      document.getElementById("pass-one").setAttribute("class", "Error");
      document.getElementById("pass-two").setAttribute("class", "Error");
    }
  });
})();
