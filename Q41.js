// Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the elements using a for loop.

function SumOfElements(arr){
    let sum = 0;

    for(let i=0 ; i<arr.length ; i++){
        sum = sum + arr[i]
    }

    console.log(sum)
}

SumOfElements([1,2,3,4,5])
