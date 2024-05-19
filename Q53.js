// Print all divisors of a num

function Divisors(num){
    for(let i=0; i<=num ; i++){
        if(num%i === 0){
            console.log(i)
        }
    }
}

Divisors(10)