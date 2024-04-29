// Write a C program to check whether a triangle can be formed with the given values for the angles.
// Test Data :
// 40 55 65

let side1 = 40;
let side2 = 55;
let side3 = 65;

if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
  console.log("The Triangle is valid");
} else {
  console.log("The Triangle is not valid");
}
