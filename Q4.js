// Check a number if it is a prime number
// number divisible by 1 and itself is a Prime Number

function PrimeNumberDetector(num){
  let divisibleCounter = 0;
  for(let i = 1 ; i<=num ; i++){
    if(num % i === 0){
      divisibleCounter = divisibleCounter + 1;
    }
  }

  if(divisibleCounter === 2){
    console.log(`${num} is a Prime Number`)
  } else {
    console.log(`${num} is a Composite Number`)
  }

}

PrimeNumberDetector(12)
