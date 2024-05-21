// Check if a string is a palindrome.

function Palindrome(string) {
  let array = string.split("");

  let reversedArray = array.reverse();

  let reversedString = reversedArray.join("");

  if (string === reversedString) {
    console.log(`'${string}' is a Palindrome`);
  } else {
    console.log(`${string} is not a Palindrome`);
  }
}

Palindrome("radar");
