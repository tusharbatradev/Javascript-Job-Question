// Check if two given strings are anagrams of each other.

function AnagramChecker(string1, string2) {
  let array1 = string1.split("");
  let array2 = string2.split("");

  let sortedArray1 = array1.sort();
  let sortedArray2 = array2.sort();

  let sortedString1 = sortedArray1.join("");
  let sortedString2 = sortedArray2.join("");

  if (sortedString1 === sortedString2) {
    console.log("Anagram");
  } else {
    console.log("Not anagram");
  }
}

AnagramChecker("silent", "listen");
