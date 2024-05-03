// Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the elements using a for loop.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
}

console.log(sum)
