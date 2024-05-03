// Find the median of an array.

let array = [3, 6, 1, 2, 5, 4];

function Median(array) {
  let sortedArray = array.sort();
  let halfLength = sortedArray.length / 2;
  let medianValue;

  // If length is odd number
  if (array.length % 2 != 0) {
    medianValue = array[halfLength - 0.5];
    console.log(medianValue);
  }
  //   If the length is even
  else {
    medianValue = array[halfLength - 1] + 0.5;
    console.log(medianValue);
  }
}

Median(array);
