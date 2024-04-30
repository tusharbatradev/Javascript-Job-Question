// Find fibonacci series from given number

testdata = 5
fibonacci = [0,1,1,2,3]

// fib

function fib(n){
    let result="";
    let first=0,second=1;
    
    if(n===1){
        result=first;
    }
    else if(n===2){
        result = first + "," + second
    }
 else{
    result = first + "," + second
    for(let i=1;i<=n-2;i++){
        let temp=second;
        second=first+second;
        first=temp;
        
        result= result + "," + second
    }
}
return result;
    
}
console.log(fib(5))




