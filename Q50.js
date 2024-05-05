// Title Case a Sentence: Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized.

function Capitalise(sentence){
    let sentArr = sentence.split(' ');
    let sentArr2 =[] ;
    for(let i = 0; i < sentArr.length; i++){
        sentArr2.push(sentArr[i].split('')); 
    }

    for(let i = 0 ; i<sentArr2.length ; i++){
        sentArr2[i][0] = sentArr2[i][0].toUpperCase();
        sentArr2[i] = sentArr2[i].join('');
    }

    let sentArr2toSentence = sentArr2.join(' ')
    console.log(sentArr2toSentence)
    
}

Capitalise('I am best'); 
