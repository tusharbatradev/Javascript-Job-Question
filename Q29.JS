// Find the largest element in an array.

// Find the largest element in an array.

let array = [2, 8, 32, 12, 34, 55, 44];

function LargestElement(array) {
    let largestElement = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] > largestElement) {
            largestElement = array[i];
        }
    }

    console.log(largestElement);
}

LargestElement(array);

