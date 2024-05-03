// Print prime numbers between given range
// range = 1-100

function printPrimesInRange(start, end) {
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && num > 1) {
            console.log(num);
        }
    }
}

// Print prime numbers between 1 and 100
printPrimesInRange(1, 100);

