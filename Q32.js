// Find the minimum and maximum values in an array.

let array = [4, 8, 2, 10, 6]

let minNumber = array[0];
let maxNumber = array[0];

for(let i = 1 ; i<=array.length ; i++){
    if(array[i] >= maxNumber){
        maxNumber = array[i]
    } else if(array[i] <= minNumber){
        minNumber = array[i]
    }
}

console.log(
    `Min Number is ${minNumber} and Max Number is ${maxNumber}`
    )