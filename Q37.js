// Check if two given strings are anagrams of each other.

// silent , listen 

function AnagramChecker(string1, string2){
  let array1 = string1.toLowerCase().split('');
  let array2 = string2.toLowerCase().split('');

  let sortedArray1 = array1.sort();
  let sortedArray2 = array2.sort();

  let sortedString1 = sortedArray1.join('');
  let sortedString2 = sortedArray2.join('');

  console.log(`${sortedString1 === sortedString2}`)
    
}

AnagramChecker('Silent', 'Listen')