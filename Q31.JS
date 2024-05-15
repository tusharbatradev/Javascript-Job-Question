// Sort an array in ascending order.

function SortArray(arr){
    let ascendingArray = arr.sort((a, b) => a - b);

    console.log(ascendingArray)
}

SortArray([9,1,12,6,48,57])