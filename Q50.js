// Title Case a Sentence: Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized.

function Capitalise(sentence) {
  let splitSentence = sentence.split(" ");

  let splittedArray = [];

  for (let i = 0; i < splitSentence.length; i++) {
    splittedArray.push(splitSentence[i].split(""));
  }

  for (let j = 0; j < splittedArray.length; j++) {
    splittedArray[j][0] = splittedArray[j][0].toUpperCase();
    splittedArray[j] = splittedArray[j].join("");
  }

  let joinedSentence = splittedArray.join(" ");
  console.log(joinedSentence);
}

Capitalise("I am best");
