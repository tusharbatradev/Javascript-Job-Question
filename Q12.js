// Write a C program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9

let x=7;
let y=9;

function Quadrant(x,y){
    if(x===0 && y===0){
        console.log(`Central Point`)
    } else if(x>0 && y>0){
        console.log(`First Quadrant`)
    } else if(x<0 && y>0){
        console.log(`Second Quadrant`)
    } else if(x<0 && y<0){
        console.log(`Third Quadrant`)
    } else if(x>0 && y<0){
        console.log(`Fourth Quadrant`)
    }
}

Quadrant(x,y)