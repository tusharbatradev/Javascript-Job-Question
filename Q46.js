// Find Missing Number: Write a function that takes an array of numbers from 1 to n with one number missing, and returns the missing number.

let array = [1,2,4,5,6,7,8,9];

let missingNumber = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] !== 1) {
        missingNumber = array[i] + 1;
        break; 
    }
}

console.log(missingNumber)

