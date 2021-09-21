//Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length.
//Add a method named collides(otherRectangle) that returns true only if the current rectangle collides
//with otherRectangle.

//Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }
  collides(otherRectangle) {
    if (
      this.topLeftXPos <= otherRectangle.topLeftXPos &&
      this.topLeftYPos <= otherRectangle.topLeftYPos &&
      this.width <= otherRectangle.width &&
      this.length <= otherRectangle.length
    ) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

let rect1 = new Rectangle(10, 8, 18, 16);
console.log(rect1);
let rect2 = new Rectangle(10, 8, 18, 16);
console.log(rect2);

rect1.collides(rect2);
