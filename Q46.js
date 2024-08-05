// Find Missing Number: Write a function that takes an array of numbers from 1 to n with one number missing, and returns the missing number.

function MissingNum(arr) {
  let missingNumber;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != 1) {
      missingNumber = arr[i] - 1;
    }
  }

  console.log(missingNumber);
}

MissingNum([1, 2, 3, 4, 5, 7, 8]);
