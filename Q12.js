// Write a C program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9

function QuadrantFinder(x,y){
    if(x===0 && y===0){
        console.log(`Central Point`)
    } else if(x>0 && y>0){
        console.log(`${x} and ${y} lies in first quadrant`)
    } else if(x<0 && y>0){
        console.log(`${x} and ${y} lies in second quadrant`)
    } else if(x<0 && y<0){
        console.log(`${x} and ${y} lies in third quadrant`)
    } else {
        console.log(`${x} and ${y} lies in fourth quadrant`)
    }
}

QuadrantFinder(7,9)