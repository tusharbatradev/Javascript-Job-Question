// Finding Armstrong Numbers

function Armstrong(num) {
  let numToStr = num.toString();

  let sum = 0;

  for(let i=0; i<numToStr.length ; i++){
    let digit = parseInt(numToStr[i]) 
    sum = sum + digit * digit * digit
  }
  
  if(sum === num){
    console.log(`${num} is an armstrong number`)
  } else{
    console.log(`${num} is not a armstrong number`)
  }
}

Armstrong(371);
