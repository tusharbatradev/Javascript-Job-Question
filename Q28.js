// Find fibonacci series from given number

function Fibonacci(num){
    let fibSeries = [0,1];

    for(let i=2; i<num ; i++){
        fibSeries[i] = fibSeries[i-1] + fibSeries[i-1]
    }

    console.log(fibSeries)
}

Fibonacci(8)



