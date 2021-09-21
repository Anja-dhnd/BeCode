/* Create a program that will re-use the Rectangle class you created previously. 
It should generate 1000 random instances of Rectangle with random positions and sizes. 
Then it will display all colliding rectangles amongst those that were generated that way.*/

// import class

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

let rect1 = new Rectangle(5, 8, 15, 15);
console.log(rect1);

let rect2;
let i = 1;

while (i <= 1000) {
  i = i + 1;

  rect2 = new Rectangle(
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1
  );

  console.log(rect2);
  rect1.collides(rect2);
}
