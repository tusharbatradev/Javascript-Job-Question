// Find the minimum and maximum values in an array.

function minAndMax(array){
  let minValue = array[0];
  let maxValue = array[0];

  for(let i=1 ; i<=array.length ; i++){
    if(maxValue>array[i]){
      maxValue=array[i]
    } else if(minValue<array[i]){
      minValue=array[i]
    }
  }

  console.log(`Minimum value is ${minValue} and Maximum value is ${maxValue}`)
}

minAndMax([12,3,44,5,6,7,89,12])