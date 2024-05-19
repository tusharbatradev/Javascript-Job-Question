function mergeAlternately(word1, word2) {
  let mergeArray = [];

  let word1Array = word1.split("");
  let word2Array = word2.split("");

  for (let i = 0; i <= word1Array.length; i++) {
    if (word1Array[i]) {
      mergeArray.push(word1Array[i]);
    }
    if (word2Array[i]) {
      mergeArray.push(word2Array[i]);
    }
  }

  let mergedString = mergeArray.join('')
  console.log(mergedString)
}

mergeAlternately("abc", "pqr");
