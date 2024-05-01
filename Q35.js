// Find the intersection of two given arrays of integers.
let array1 = [1,2,3,4];
let array2 = [3,4,5,6];

let intersection = [];

for(let i = 0 ; i<=array1.length ; i++){
    if(array2.includes(array1[i])){
        intersection.push(array1[i])
    }
}

console.log(intersection)