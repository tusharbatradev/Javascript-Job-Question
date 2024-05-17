// Count Occurrences: Write a function that takes an array of numbers and a target number as input and returns the number of times the target number appears in the array using a for loop.

function CountOccurence(arr, target) {
  let counter = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (target === arr[i]) {
      counter = counter + 1;
    }
  }

  console.log(`${target} is presented ${counter} times in the array`);
}

CountOccurence([1, 2, 2, 3, 4, 5, 6, 6, 2, 9], 2);
