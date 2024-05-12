function mergeAlternately(word1, word2) {
    let mergedArr = [];
  
    let word1Arr = word1.split("");
    let word2Arr = word2.split("");
  
    for (let i = 0; i <= word1Arr.length; i++) {
      if (word1Arr[i]) {
        mergedArr.push(word1Arr[i]);
      }
      if (word2Arr[i]) {
        mergedArr.push(word2Arr[i]);
      }
    }
  
    let mergedStr = mergedArr.join('')
    console.log(mergedStr);
  }
  
  mergeAlternately("abc", "pqr");
