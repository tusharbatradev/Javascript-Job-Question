// Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60

let side1 = 50;
let side2 = 50;
let side3 = 60;

function TriangleFormat(side1,side2,side3){
    if(side1!=side2 && side1!=side3 && side2!=side3){
        console.log(`It's a scalene Triangle`)
    } else if(side1===side2 && side2===side3){
        console.log(`It's a Equilateral Triangle`)
    } else{
        console.log(`It's a Isosceles Triangle`)
    }
}

TriangleFormat(side1,side2,side3)