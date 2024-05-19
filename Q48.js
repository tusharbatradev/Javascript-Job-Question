// Check for Subsequence: Write a function that takes two strings as input and returns true if the first string is a subsequence of the second string, false otherwise.

let str1 = "abcde";
let str2 = "acxe";

function isSubsequence(str1, str2) {
  let subsequence = false;

  for (let i = 0; i < str2.length; i++) {
    let found = false;
    for (let j = 0; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      subsequence = false;
      break;
    } else {
      subsequence = true;
    }
  }

  return subsequence;
}

console.log(isSubsequence(str1, str2));
