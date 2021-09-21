let words = [
  "congress",
  "articulation",
  "seagull",
  "peacock",
  "earthworm",
  "card",
  "elegant",
  "caffeine",
  "narcotics",
  "obelisk",
  "permanent",
  "mozzarella",
  "rifle",
  "toothpick",
  "scissors",
  "dice",
  "crush",
  "wonder",
  "orchard",
  "cemetary",
  "manicure",
  "taxidermy",
  "privacy",
  "eggplant",
  "cockroach",
  "satan",
  "occasion",
  "irrational",
  "cosmos",
  "succubus",
];

let word = words[Math.floor(Math.random() * words.length)].split("");
let buttons = document.querySelectorAll(".letter");
let wordLetters = document.getElementById("wordLetters");
let underScore;
let giffy = document.createElement("img");

let next = 0;

//Create spans with accurate number of underscores
function createUnderScore() {
  wordLetters.innerHTML = "";

  word.forEach((letter) => {
    underScore = document.createElement("span");
    underScore.innerHTML = "_ ";

    wordLetters.appendChild(underScore); //Add created span in wordLetter
  });
}
createUnderScore();

let spanTable;

// Underscore to letters

function changeUnderScore(letter) {
  let spanTable = wordLetters.querySelectorAll("span"); //Attribue à spanTable une liste/un tableau de toutes les spans de wordLetters

  let indices = [];
  let idx = word.indexOf(letter); // = letter index in the word

  while (idx != -1) {
    indices.push(idx);
    idx = word.indexOf(letter, idx + 1);
  }

  indices.forEach((indice) => {
    spanTable[word.indexOf(letter, indice)].innerHTML = letter;
  });
}

// Status of the game
function gameState() {
  let spanTable = wordLetters.querySelectorAll("span");

  let bool = true;

  spanTable.forEach((span) => {
    if (span.innerHTML == "_ ") {
      bool = false;
    }
  });

  if (bool) {
    document.querySelector("#tryAgain").style.visibility = "visible";
    giffy.src =
      "https://raw.githubusercontent.com/Anja-dhnd/Hangman/main/assets/d30dfub-b1a802b7-e651-4673-98f0-d88794fdd3c9.gif";
    document.getElementById("gif").appendChild(giffy);
  }
  //fail
  if (next == 7) {
    document.querySelector("#tryAgain").style.visibility = "visible";
    giffy.src =
      "https://raw.githubusercontent.com/Anja-dhnd/Hangman/main/assets/490840_spoczywaj-w-pokoju.gif";
    document.getElementById("gif").appendChild(giffy);
  }
}

//Restart
function restart() {
  document.getElementById("gif").removeChild(giffy);
  document.querySelector("#tryAgain").style.visibility = "hidden";

  next = 0;
  //words[Math.floor(Math.random() * words.length)].split("");
  createUnderScore();
  document.getElementById("counter").innerHTML = "ATTEMPTS:  " + next + "/7";
  gameState();
}

document.getElementById("tryAgain").addEventListener("click", () => {
  restart();
});

// Attempts + try to add used letters but not working

//var memory = document.getElementById("memory");
//var usedLetters = [];

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (next < 7) {
      if (word.includes(button.innerHTML)) {
        changeUnderScore(button.innerHTML);
      } else {
        next++;
        //usedLetters.push(button.toUpperCase());
        //memory.innerHTML = usedLetters.join(" ");
      }
    }
    //document.getElementById("memory").innerHTML =
    //"Used letters: " + usedLetters;
    document.getElementById("counter").innerHTML = "ATTEMPTS:  " + next + "/7";
    gameState();
  });
});
