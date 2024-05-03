// Check if two given strings are anagrams of each other.

let str1 = "listen",
  str2 = "silent";

function AnagramChecker(str1, str1) {
  let str1Arr = str1.split("").sort();
  let str2Arr = str2.split("").sort();

  let str3 = str1Arr.join("");
  let str4 = str2Arr.join("");

  if (str3 === str4) {
    console.log("Anagram");
  } else {
    console.log("False");
  }
}

AnagramChecker(str1,str2)
