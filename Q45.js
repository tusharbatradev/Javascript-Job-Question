// Nested Arrays: Write a function that takes an array of arrays as input and flattens it into a single array using a for loop.

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let flattenArr = [];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    flattenArr.push(array[i][j]);
  }
}

console.log(flattenArr);
