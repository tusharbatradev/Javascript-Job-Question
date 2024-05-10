// GCD AND HCF

function GCD(num1, num2){
    let gcd = 1;
    for(let i=1; i<=num1 ; i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i
        }
    }
    console.log(gcd)
}

GCD(20,40)