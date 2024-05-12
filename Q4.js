// Check a number if it is a prime number

function PrimeNumber(n) {
  let divideCounter = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divideCounter = divideCounter + 1;
    }
  }

  if (divideCounter === 2) {
    console.log(`${n} is a Prime Number`);
  } else {
    console.log(`${n} is not a Prime Number`);
  }
}

PrimeNumber(11);
