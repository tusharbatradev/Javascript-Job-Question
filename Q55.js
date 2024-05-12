// Sorting with quicksort algorithm

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];

  let smallerArr = [];
  let largerArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smallerArr.push(arr[i]);
    } else {
      largerArr.push(arr[i]);
    }
  }

  let sortedSmaller = quickSort(smallerArr);
  let sortedLarger = quickSort(largerArr);

  return [...sortedSmaller, pivot, ...sortedLarger];
}

console.log(quickSort([5, 2, 6, 89, 12, 101]));
