// Character Count: Write a function that takes a string as input and returns an object with the count of each character in the string using a for loop.
function characterCount(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

let string = "Tushar";
let output = characterCount(string);
console.log(output); // { T: 1, u: 1, s: 1, h: 1, a: 1, r: 1 }
