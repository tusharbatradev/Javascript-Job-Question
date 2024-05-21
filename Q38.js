// Find the median of an array.

function Median(array) {
  let sortedArray = array.sort();

  let length = sortedArray.length;

  let middleIndex = Math.floor(length / 2);

  if (sortedArray.length % 2 === 0) {
    console.log(array[middleIndex]);
  } else {
    console.log(array[middleIndex]);
  }
}

Median([7, 8, 4, 3, 5, 6, 2, 1]);
