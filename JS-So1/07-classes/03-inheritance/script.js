// 07-classes/03-inheritance/script.js - 7.3: inheritance

/* 

In the script, there is a prewritten class named: Animal.

From this class, create the two classes, Cat and Dog. They will each have two properties, name and greeting (the second property must be static).

When the button is clicked, create an instance of the Dog class and an instance of the Cat class and display the return value of the sayHello method inside the console .
*/

(() => {
  class Animal {
    sayHello() {
      return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
  }
  // your code here

  class Cat extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
    static greeting = "meow";
  }

  class Dog extends Animal {
    constructor(name) {
      super();
      this.name = name;
    }
    static greeting = "wouf";
  }

  document.getElementById("run").addEventListener("click", () => {
    let nameCat = new Cat("Kitty");
    let nameDog = new Dog("Rufus");
    console.log(nameCat.sayHello());
    console.log(nameDog.sayHello());
  });
})();
