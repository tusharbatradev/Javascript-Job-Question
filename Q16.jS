// Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60

let side1 = 50;
let side2 = 50;
let side3 = 50;

function TriangleFormat(s1,s2,s3){
    if(s1 === s2 && s2 === s3){
        console.log(`The Triangle is equilateral`)
    } else if(s1 != s2 && s2 != s3 && s1 != s3){
        console.log(`The Triangle is Scalene`)
    } else{
        console.log(`The Triangle is Isosceles`)
    }
}

TriangleFormat(side1,side2,side3)