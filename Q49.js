// Average from array

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;

let average = 0;

for (let i = 0; i < array.length; i++) {
  sum = sum + array[i];
  average = sum / array.length;
}

console.log(`Average is ${average} from the array`);
