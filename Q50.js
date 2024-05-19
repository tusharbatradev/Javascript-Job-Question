// Title Case a Sentence: Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized.

function Capitalise(sentence) {
  let splittedSentence = sentence.split(" ");

  let splitArray = [];

  for (let i = 0; i < splittedSentence.length; i++) {
    splitArray.push(splittedSentence[i].split(""));
  }

  for (let j = 0; j < splitArray.length; j++) {
    splitArray[j][0] = splitArray[j][0].toUpperCase();
    splitArray[j] = splitArray[j].join("");
  }

  let joinedSentence = splitArray.join(" ");
  console.log(joinedSentence);
}

Capitalise("I am best");
