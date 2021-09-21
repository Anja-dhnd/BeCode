// 07-classes/04-getter-setter/script.js - 7.4: getter & setter
/*

Create a class named Person. It will have two properties, firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]",
and a setter name, which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.

When the button is clicked, we create an instance of the Person class and display the value of the name inside the console, then assigns a new value to it 
and displays the state of the instance inside the console at the end of the process.
*/

//https://www.programiz.com/javascript/getter-setter

(() => {
  // your code here

  class person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    } //The get syntax binds an object property to a function that will be called when that property is looked up.
    getName() {
      return `${this.firstName} ${this.lastName}`;
    }
    setName(newName) {
      this.firstName = newName.split(" ")[0];
      this.lastName = newName.split(" ")[1];
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    const noOne = new person("Putin", "Vladimir");
    console.log(noOne.getName());
    noOne.setName("Lukashenko Alexander");
    console.log(noOne.getName());
  });
})();
