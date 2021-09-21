//Create a function named askTvSerie() that will ask the user for the following data about its
//favorite TV serie:

/* Name
    Production year
    Names of the cast members (there can be as much as the user want)*/

//That function must gather all the data in a single object and return it.
//The data structure must be elegant.

//Create a program that use that function to generate a TV serie object and display
//it to the user in JSON format.

// DOESNT WORK !!
const readlineSync = require("readline-sync");

function askTvSerie() {
  let serie = {
    name: "",
    year: "",
    cast: [],
  };
  let actors;
  serie.name = readlineSync.question("What is your favourite series? ");
  serie.year = Number(readlineSync.question("What is the production year? "));

  do {
    let actors = readlineSync.question(
      "Enter actors playing in it (end with / to exit): "
    );
    if (actors !== "/") {
      serie.cast.push(actors);
    }
    //serie.cast.push(actors);
  } while (actors !== "/");
  return serie;
}

askTvSerie();

console.log(JSON.stringify(askTvSerie));
