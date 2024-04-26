// Find a prime number

function PrimeNumber(num) {
    if (num >= 1) {
        console.log(`${num} is a Prime Number`)
    } else if (num === 0) {
        console.log(`${num} is not a Prime nor a Composite Number`)
    }
    else {
        console.log(`${num} is not a Prime Number`)
    }
}

PrimeNumber(0)