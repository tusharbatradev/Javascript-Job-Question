// Search for a target element in a sorted/unsorted array using linear search

function LinearSearch(arr, target) {
    for(let i=0 ; i<=arr.length ; i++){
        if(arr[i] === target){
            console.log(`The index of ${target} is ${i}`)
        }
    }
}

LinearSearch([1,24,31,2,34,32,11],24);
