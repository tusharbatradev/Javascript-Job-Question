// Remove Duplicate from an array

let array = [1, 2, 2, 3, 4, 4, 5];

let uniqueArray = [];

for(let i = 0 ; i<array.length ; i++){
    if(array[i] != array[i-1]){
        uniqueArray.push(array[i])
    }
}

console.log(uniqueArray)