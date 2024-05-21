// Check if two given strings are anagrams of each other.

// silent , listen 

function AnagagramCheck(string1, string2){
  let array1 = string1.split('').sort();
  let array2 = string2.split('').sort();

  let sortedString1 = array1.join('');
  let sortedString2 = array2.join('');

  if(sortedString1 === sortedString2){
    console.log(`'${string1}' and '${string2}' are anagram of each other.`)
  } else {
    console.log(`'${string1}' and '${string2}' are not anagram of each other.`)
  }

}

AnagagramCheck('listen','silenat')