(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    document.body.style.backgroundColor =
      document.getElementById("color").value;
  });
})();
