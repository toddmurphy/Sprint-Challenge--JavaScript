// 1. Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.height = attributes.height;
    this.width = attributes.width;
  }
  volume() {
    return `${this.length} * ${this.width} * ${this.height}`;
  }
  surfaceArea() {
    return (
      2 *
      `${this.length} * ${this.width} +
        ${this.length} * ${this.height} +
        ${this.width} * ${this.height}`
    );
  }
}

//Stretch: use CubMaker to extend the class of CuboidMaker.
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
  constructor(attributes) {
    //super connects the child CubeMaker attributes to the parent CuboidMaker attributes
    super(attributes);
  }
  //newDimension parameter assigned cuboid properties
  cubeVolume(num1, num2, num3) {
    return `${num1} * ${num2} * ${num3}`;
  }
  //newDimension parameter assigned cuboid properties
  cubeSurface(num1, num2, num3) {
    return (
      2 *
      `${num1} * ${num2} +
        ${num1} * ${num3} +
        ${num2} * ${num3}`
    );
  }
}

/* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
/*CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
 };*/

/* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
/*CuboidMaker.prototype.surfaceArea = function() {
  return (
    2 *
    (this.length * this.width +
      this.length * this.height +
      this.width * this.height)
  );
};*/

/* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});
/**NOTE, if you change the values of the cuboid ojbect, the console will update or run classes.js in ther terminal to get the correct output. Otherwise there's a syntax error that keeps saying Cuboid was already identified */
/*IMPORTANT: When i copy my class to codepen, it works fine, so i'm not going to worry about this error */
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log('here', cube.cubeVolume(4, 5, 5)); // pass in 'cuboid' object as an argument and the pass/assign it to the parameter 'newDimension' to use cuboid properties.
console.log(cube.cubeSurface(4, 5, 5)); // pass in 'cuboid' object as an argument and the pass/assign it to the parameter 'newDimension' to use cuboid properties.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
