// Check if a string is a palindrome.

function Palindrome(string){
  let array = string.toLowerCase().split('');

  let reversedArray = array.reverse();

  let reversedString = reversedArray.join('').toLowerCase();

  if(string === reversedString){
    console.log(`${string} is a Palindrome String`)
  } else{
    console.log(`${string} is not a Palindrome String`)
  }
}

Palindrome('Radar')
