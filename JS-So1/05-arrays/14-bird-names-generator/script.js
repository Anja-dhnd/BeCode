// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);

  // your code here
  document.getElementById("run").addEventListener("click", () => {
    var randomName = Math.floor(Math.random() * birds.length);

    var arrAdj = Array.from(adjectives); // switching to array
    var randomAdj = arrAdj[Math.floor(Math.random() * arrAdj.length)];
    /*console.log(birds[randomName].name);
    console.log(randomAdj);*/

    if (birds[randomName].fem == true) {
      document.getElementById("target").innerHTML =
        birds[randomName].name + " " + randomAdj + "e";
    } else {
      document.getElementById("target").innerHTML =
        birds[randomName].name + " " + randomAdj;
    }
  });
})();
