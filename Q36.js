// Remove Duplicate from an array

function Duplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  console.log(uniqueArray);
}

Duplicates([1, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 8]);
