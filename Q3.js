//  Factorial of a number
// Factorial of 4 = 4*3*2*1
// = 24

function Factorial(num){
  let factorial = 1;

  for(let i = 1 ; i<= num ; i++){
    factorial = factorial * i
  }

  console.log(factorial)
}

Factorial(4)
