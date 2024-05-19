// Chunk Array: Write a function that takes an array and a chunk size as input and divides the array into smaller arrays of the specified chunk size.

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let chunkSize = 2;

let chunkArr = [];

let chunklength = array.length / 2;

for (let i = 0; i < array.length; i++) {
  if (chunkArr.length !== chunkSize) {
    chunkArr.push(array[i]);
  }
}

console.log(chunkArr);


