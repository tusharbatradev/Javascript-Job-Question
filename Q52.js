// Finding Armstrong Numbers

function Armstrong(num) {
  let str = num.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let strToNum = parseInt(str[i]);
    sum = sum + strToNum * strToNum * strToNum;
  }
  if(sum === num){
    console.log(`It's an armstrong number`)
  } else{
    console.log(`It's not an armstrong number`)
  }
}

Armstrong(371);
