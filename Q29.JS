// Find the largest element in an array.

function LargestElement(arr){
    let largestElement = arr[0];

    for(let i=1 ; i<=arr.length ; i++){
        if(arr[i]>largestElement){
            largestElement = arr[i]
        }
    }

    console.log(largestElement)
}

LargestElement([1,2,5,8,3,10,4,40,80,8])