// Find the minimum and maximum values in an array.

function MinAndMax(arr) {
  let minValue = arr[0];
  let maxValue = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > minValue) {
      minValue = arr[i];
    } else if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  console.log(minValue, maxValue);
}

MinAndMax([2, 8, 9, 5, 6, 87]);
