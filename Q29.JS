// Find the largest element in an array.

function LargestElement(array){
  let largestElement = array[0];

  for(let i=1; i<=array.length ; i++){
    if(array[i] > largestElement){
      largestElement = array[i]
    }
  }

  console.log(`Largest Element in the array is ${largestElement}`)
}

LargestElement([12,2,11,10,90,8])
