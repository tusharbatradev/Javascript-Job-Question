// Search for a target element in a sorted/unsorted array using linear search

function LinearSearch(array,target){
    for(let i=0 ; i<=array.length ; i++){
        if(array[i] === target){
            console.log(`The index of ${target} is ${i}`)
        }
    }
    
}

LinearSearch([1,4,56,74,22,12,45] , 12)
