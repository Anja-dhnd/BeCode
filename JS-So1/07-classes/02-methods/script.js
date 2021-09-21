//07-classes/02-methods/script.js - 7.2: methods

(() => {
  // your code here

  class person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    sayHi() {
      return "Hello, " + this.firstName + " " + this.lastName;
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    let user = new person("Anja", "Dhnd");
    console.log(user.sayHi());
  });
})();
