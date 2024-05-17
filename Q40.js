// Check if a string is a palindrome.

function Palindrome(string) {
  let array = string.split("");

  let reversedArray = array.reverse();

  let reversedString = reversedArray.join("");

  if (reversedString === string) {
    console.log(`${string} is a palindrome string`);
  } else {
    console.log(`${string} is not a palindrome string`);
  }
}

Palindrome("radar");
