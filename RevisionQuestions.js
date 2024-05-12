// Q1 FACTORIAL
// 4=1*2*3*4 = 24

function Factorial(num){
    let ans = 1;
    for(let i = 1 ; i<=num ; i++){
        ans = ans * i
    }
    console.log(`Factorial of ${4} is ${ans}`)
}
Factorial(4)

// Q2 Prime Number
// 8%previousNumbers
// 8/8=t = div + 1
// 8/7=f
// 8/6=f
// 8/5=f
// 8/4=t = div+1
// 8/3=f
// 8/2=t = div+1
// 8/1=t =div+1
// whenever it's true make divisibleCount + 1

function PrimeNumber(num){
    let divisibleCount = 0;
    for (let i = 1;i<=num;i++){
        if(num%i === 0){
            divisibleCount = divisibleCount + 1
        }
    }
    if(divisibleCount === 2){
        console.log(`${num} is a Prime Number`)
    } else{
        console.log(`${num} is a Composite Number`)
    }
}
PrimeNumber(11)


// q3 Fibonacci Series
// 8 = 0,1,1,2,3,5,8,13

function Fibonacci(num){
    let fib = [0,1]
    
    for(let i=2 ; i<num ; i++){
        fib[i] = fib[i-1] + fib[i-2] 
    }
    console.log(`Fibonacci Series :- ${fib}`)
}

Fibonacci(8)

// Q4 Intersection of 2 arrays
// arr = [1,2,3,4]
// arr2 = [3,4,5,6]
// intersection = [3,4]

function Intersection(arr1,arr2){
    let intArr = [];
    
    for(let i=0 ; i<=arr1.length ; i++){
        for(let j=0 ; j<arr2.length ; j++){
            if(arr1[i] === arr2[j]){
                intArr.push(arr1[i])
            }
        }
    }
    
    console.log(intArr)
}

Intersection([1,2,3,4,8,7],[3,4,5,6,7])

// Palindrome of string
function Palindrome(string){
    let lowerStr = string.toLowerCase();
    let stringArray = lowerStr.split('');

    let reversedArr = stringArray.reverse();
    let reversedStr = reversedArr.join('')

    if(lowerStr === reversedStr){
        console.log('String is a Palindrome')
    } else{
        console.log('String is not a Palindrome')
    }   
}
let string = 'Radar'

Palindrome(string)

// Divisor of a number
function Divisor(num){
    let Divisor = [];

    for(let i=1 ; i<=num ; i++){
        if(num%i === 0){
            Divisor.push(i)
        }
    }

    console.log(Divisor)
}

Divisor(10)

// Armstrong
// 371 = 3cube + 7cube + 7cube = ArmstrongNumber

function Armstrong(n){
    let str = n.toString();
    let sum = 0;

    for(let i=0 ; i<str.length ; i++){
        let num = parseInt(str[i]);
        sum = sum + num * num * num
    }
    if(sum === n){
        console.log('ArmStrong')
    } else{
        console.log('Not a ArmStrong')
    }
}

Armstrong(371)







