// Write a C program to check whether an alphabet is a vowel or a consonant.
// Test Data :
// k

let alphabet = "e";

function VowelTester(alphabet) {
  if (
    alphabet === "a" ||
    alphabet === "e" ||
    alphabet === "i" ||
    alphabet === "o" ||
    alphabet === "u"
  ) {
    console.log(`The alphabet '${alphabet}' is a vowel`);
  } else {
    console.log(`The alphabet '${alphabet}' is a consonant`);
  }
}

VowelTester(alphabet)