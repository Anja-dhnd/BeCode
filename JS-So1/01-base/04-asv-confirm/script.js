// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
  // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
  console.log(
    "%c ",
    "padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;"
  );
  console.log("Hello Woods programmer");

  // YOUR CODE HERE
})();

let age = prompt("How old are you? ");
let gender = prompt("What's your gender? ");
let town = prompt("Where do you live? ");

let asv = confirm("Confirm information: " + age + gender + town);

while (asv == false) {
  age = prompt("How old are you? ");
  gender = prompt("What's your gender? ");
  town = prompt("Where do you live? ");

  let asv = confirm("Confirm information: " + age + gender + town);
}
if (asv == true) {
  alert("Thank you.");
}
