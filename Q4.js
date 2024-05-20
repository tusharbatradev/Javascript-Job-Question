// Check a number if it is a prime number

function PrimeNumberDetector(num) {
  let divisibleCounter = 0;

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisibleCounter += 1;
    }
  }

  if (divisibleCounter === 2) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is a Composite Number`);
  }
}

PrimeNumberDetector(11);
