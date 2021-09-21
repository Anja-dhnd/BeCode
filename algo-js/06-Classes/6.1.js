/*Create a class named Circle with attributes xPos, yPos and radius. 
Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/
const readlineSync = require("readline-sync");

class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  move(xOffset, yOffset) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  }
  get surface() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let circle = new Circle(5, 10, 5);

console.log("Surface of the circle: " + circle.surface);
