// Check if a string is a palindrome.

function Palindrome(string) {
  let stringArray = string.split("");

  let reverseArray = stringArray.reverse();

  let reverseString = reverseArray.join("");

  if (string === reverseString) {
    console.log("Palindrome");
  } else {
    console.log("not a Palindrome");
  }
}

Palindrome("radar");
