let selectElementsStartingWithA = (array) => {
  return array.filter((word) => word.startsWith("a"));
  // return array.filter((e)=>{
  //return e.charAt(0) === 'a';
};

let selectElementsStartingWithVowel = (array) => {
  return array.filter((a) => a.charAt(0).match(/[aeiou]+/));
};

let removeNullElements = (array) => {
  return array.filter(function (val) {
    return val !== null;
  });
};

let removeNullAndFalseElements = (array) => {
  return array.filter((el) => el != null && el !== false);
};

let reverseWordsInArray = (array) => {
  return array.map((element) => {
    return element.split("").reverse().join("");
  });
};

let everyPossiblePair = (array) => {
  return array
    .sort()
    .map((elem, i) => {
      if (i === array.length - 1) {
        return [array[i], array[0]];
      } else {
        return [array[i], array[i + 1]];
      }
    })
    .map((elem) => elem.sort())
    .sort();
};

let allElementsExceptFirstThree = (array) => {
  return array.slice(3);
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = (array) => {
  return array.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

let getFirstHalf = (string) => {
  return string.slice(0, Math.round(string.length / 2));
};

let makeNegative = (number) => {
  return -Math.abs(number);
};

let numberOfPalindromes = (array) => {
  return array.filter(
    (element) => element === element.split("").reverse().join("")
  ).length;
};

let shortestWord = (array) => {
  return array.reduce((a, b) => (a.length <= b.length ? a : b));
};

let longestWord = (array) => {
  return array.reduce((a, b) => (a.length < b.length ? b : a), "");
};

let sumNumbers = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

let repeatElements = (array) => {
  return array.concat(array);
};

let stringToNumber = (string) => {
  return parseInt(string);
};

let calculateAverage = (array) => {
  return array.reduce((a, b) => a + b, 0) / array.length;
};

let getElementsUntilGreaterThanFive = (array) => {
  return array.slice(0, 6);
};

let convertArrayToObject = (array) => {
  return array.reduce((word, value, index) => {
    if (index % 2 === 0) {
      word[value] = array[index + 1];
    }
    return word;
  }, {});
};

let getAllLetters = (array) => {
  return [...new Set(array)].join("").split("").sort();
};

let swapKeysAndValues = (object) => {
  return Object.assign(
    {},
    ...Object.entries(object).map(([a, b]) => ({ [b]: a }))
  );
};

let sumKeysAndValues = (object) => {
  return Object.keys(object).reduce((element, key) => {
    return (element = element + parseInt(object[key]) + parseInt(key));
  }, 0);
};

let removeCapitals = (string) => {
  return string.replace(/[A-Z]/g, "");
};

let roundUp = (number) => {
  return Math.ceil(number);
};

let formatDateNicely = (date) => {
  return date.toLocaleDateString();
};

let getDomainName = (string) => {
  return string.split('@').pop().split('.com').shift();
};

let titleize = (string) => {
  return "Write your method here";
};

let checkForSpecialCharacters = (string) => {
  return string.match(/^[a-zA-Z0-9 ]*$/) === null;
};

let squareRoot = (number) => {
  let sqrt = Math.sqrt(number);
  return sqrt;
}


let factorial = (number) => {
  if(number == 0 || number == 1){
      return 1;
  }else{
      return number * factorial(number-1);
  }
}

let findAnagrams = (string) => {
  return "Write your method here";
};

let convertToCelsius = (number) => {
  let convert = Math.ceil((number - 32) * 5 / 9);
  return convert;
}

let letterPosition = (array) => {
  array.map(e => e.toUpperCase().charCodeAt(0) - 64);

};
