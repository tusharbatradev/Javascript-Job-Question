//  Factorial of a number
// Factorial of 4 = 4*3*2*1
// = 24

function Factorial(num) {
  let factoial = 1;

  for (let i = 1; i <= num; i++) {
    factoial = factoial * i;
  }

  console.log(factoial);
}

Factorial(4);
