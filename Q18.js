// Write a C program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.

let character = "%";

function CharacterFormat(character) {
  let asciiValue = character.charCodeAt(0);

  if (
    (asciiValue >= 65 && asciiValue <= 90) ||
    (asciiValue >= 97 && asciiValue <= 122)
  ) {
    console.log(`${character} is an alphabet`);
  } else if (asciiValue >= 48 && asciiValue <= 57) {
    console.log(`${character} is a number`);
  } else {
    console.log(`${character} is a Special Character`);
  }
}

CharacterFormat("^");
