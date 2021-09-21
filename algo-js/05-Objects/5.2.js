/*Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined 
in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie 
then display a randomized list of the previous cast that will form the new cast of your next serie.*/

// DOESNT WORK !!
const readlineSync = require("readline-sync");

let tvSerie = {
  Name: "",
  Year: "",
  Cast: [],
};

function askTvSerie() {
  tvSerie.Name = readlineSync.question(
    "Hello, please enter the name of the serie : "
  );
  tvSerie.Year = readlineSync.question(
    "What's the year production of this serie ? "
  );
  let nCast = new Number(
    readlineSync.question("How many members of the cast do you wish to add ? ")
  );
  for (i = 1; i <= nCast; i += 1) {
    tvSerie.Cast.push(
      readlineSync.question(
        "Please enter the name of the member n° " + i + " : "
      )
    );
  }
  console.log(tvSerie);
}
