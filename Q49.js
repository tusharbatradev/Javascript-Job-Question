// Average from array

function AverageOfArray(array){
  let sum = 0 ;

  for(let i=0 ; i<=array.length ; i++){
    sum = sum + i
  }

  let average = sum/array.length
  console.log(average)
}

AverageOfArray([1,2,3,4,5,6,7,8,9,10])