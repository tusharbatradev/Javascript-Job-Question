// Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the elements using a for loop.
function SumOfArray(array){
  let sum = 0;

  for(let i=0 ; i<array.length ; i++){
    sum = sum + array[i]
  }

  console.log(sum)
}

SumOfArray([1,2,4,5,6,7,33])
