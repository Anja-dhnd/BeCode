// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
  let fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here

  var middle = fruits.slice(1, 9);
  middle.push("kiwi");
  middle.unshift("banana");
  document.getElementById("run").addEventListener("click", () => {
    alert(middle);
  });
})();
