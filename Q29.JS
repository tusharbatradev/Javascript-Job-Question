// Find the largest element in an array.

let array = [3, 7, 2, 8, 5];
let largestNumber = array[0];

for(let i = 1 ; i<=array.length ; i++){
    if(array[i] > largestNumber){
        largestNumber = array[i]
    }
}

console.log(largestNumber)