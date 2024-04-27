// Check a number if it is a prime number

function PrimeNumber(num) {
  let divisible = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisible = divisible + 1;
    }
  }

  if (divisible === 2) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is not a Prime Number`);
  }
}

PrimeNumber(2);
