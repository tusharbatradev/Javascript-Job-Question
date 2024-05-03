// Count Occurrences: Write a function that takes an array of numbers and a target number as input and returns the number of times the target number appears in the array using a for loop.

let array = [1,2,3,4,2,1,1];
let target = 1
let numberOfTimes = 0;

for(let i = 0 ; i<=array.length ; i++){
    if(target === array[i]){
        numberOfTimes = numberOfTimes + 1
    }
}

console.log(`The number' ${target}' has been appear ${numberOfTimes} times in that array.`)