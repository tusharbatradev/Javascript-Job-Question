// CHECK IF A NUMBER IS EVEN OR ODD

function EvenorOdd(num){
    if(num%2 === 0){
        console.log(`${num} is an Even Number`)
    } else{
        console.log(`${num} is an Odd Number`)
    }
}

let number = 10;
EvenorOdd(number)