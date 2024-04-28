// Write a C program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9

let x=7;
let y=9;

if(x>0 && y>0){
    console.log(`The coordinate point (${x},${y}) lies in the First quadrant. `)
} else if(x<0 && y>0){
    console.log(`The coordinate point (${x},${y}) lies in the Second quadrant. `)
} else if(x<0 && y<0){
    console.log(`The coordinate point (${x},${y}) lies in the Third quadrant. `)
} else{
    console.log(`The coordinate point (${x},${y}) lies in the Fourth quadrant. `)
}