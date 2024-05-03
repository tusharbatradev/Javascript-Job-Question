// Find Maximum Number: Write a function that takes an array of numbers as input and returns the maximum number in the array using a for loop.

let arr = [1,2,4,5,68,9]
let maximum = arr[0];

for(let i=1 ; i<arr.length ; i ++){
    if(maximum < arr[i]){
        maximum = arr[i]
    }
}

console.log(maximum)