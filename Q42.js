// Find Maximum Number: Write a function that takes an array of numbers as input and returns the maximum number in the array using a for loop.

function MaxNumber(array){
    let maximumValue = array[0];

    for(let i=0 ; i<=array.length ; i++){
        if(array[i]>maximumValue){
            maximumValue = array[i]
        }
    }

    console.log(`Maximum Value is ${maximumValue}`)
}

MaxNumber([1,2,3,6,21,45,67,68,89,55])