//  Factorial of a number

function factorial(num) {
    let ans = 1;

    if (num === 0)
        console.log(1)
    for (let i = 1; i <= num; i++)
        ans = ans * i
    console.log(ans);
}

factorial(4)