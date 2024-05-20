// Write a C program to check whether an alphabet is a vowel or a consonant.
// Test Data :
// k

function VowelTester(alphabet) {
  if (
    alphabet === "a" ||
    alphabet === "e" ||
    alphabet === "i" ||
    alphabet === "o" ||
    alphabet === "u"
  ) {
    console.log(`${alphabet} is a vowel`);
  } else {
    console.log(`${alphabet} is not a vowel`);
  }
}

VowelTester('l')