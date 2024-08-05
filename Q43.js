// Count Occurrences: Write a function that takes an array of numbers and a target number as input and returns the number of times the target number appears in the array using a for loop.

function CountOccurence(array, target){
  let counter = 0;

  for(let i=0 ; i<=array.length ; i++){
    if(target === array[i]){
      counter = counter + 1
    }
  }

  console.log(`${target} is presented ${counter} times in the Array`)
}

CountOccurence([12,2,22,2,12,32,1], 1122)
