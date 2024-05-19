// Sorting with quicksort algorithm

function quickSort(arr){

  if (arr.length <= 1) {
    return arr;
  }

  let pivotElement = arr[0]
  let smallerArray = [];
  let largerArray = [];

  for(let i=1 ; i<arr.length ; i++){
    if(pivotElement>arr[i]){
      smallerArray.push(arr[i])
    } else{
      largerArray.push(arr[i])
    }
  }

  let sortedSmaller = quickSort(smallerArray)
  let sortedLarger = quickSort(largerArray)

  return [...sortedSmaller, pivotElement, ...sortedLarger];
}

console.log(quickSort([4,9,5,6,2,1,7,3,8,10]))