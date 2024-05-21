// Sort an array in ascending order.
function SortArray(array){
    if (array.length <= 1) {
        return array; 
    }

    let pivotElement = array[0];
    let smallerArray = [];
    let largerArray = [];

    for(let i=1 ; i<array.length ; i++){
        if(pivotElement>array[i]){
            smallerArray.push(array[i])
        } else{
            largerArray.push(array[i])
        }
    }

    let sortedSmaller = SortArray(smallerArray);
    let sortedLarger = SortArray(largerArray)
    return [...sortedSmaller, pivotElement, ...sortedLarger];
}

console.log(SortArray([2,12,32,11,13,1,33,5]))