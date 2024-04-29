// Write a C program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.

let character = "%";

let askiiValue = character.charCodeAt(0);

if (
  (askiiValue >= 65 && askiiValue <= 90) ||
  (askiiValue >= 97 && askiiValue <= 122)
) {
  console.log(`The ${character} Character is an alphabet`);
} else if (askiiValue >= 48 && askiiValue <= 57) {
  console.log(`The ${character} Character is a digit`);
} else {
  console.log(`The ${character} Character is Special Character`);
}

console.log(askiiValue);
