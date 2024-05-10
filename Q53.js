// Print all divisors of a num
function Divisors(n){ 
    let divisors = [];

    for(let i=1 ; i<n ; i++){
        if(n%i ===0){
            divisors.push(i)
        }
    }
    console.log(divisors)
}

Divisors(20)