// Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60

let side1 = 502;
let side2 = 20;
let side3 = 510;

if(side1 === side2 && side2 === side3){
    console.log('Triangle is Equilateral Triangle')
} else if(side1 != side2 && side2 != side3){
    console.log('Traingle is Scalene Triangle')
} else{
    console.log('Traingle is Isosceles Triangle')
}