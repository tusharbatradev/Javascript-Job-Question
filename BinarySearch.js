// Finding target element's index with Binary Search

function ElementIndex(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            console.log(mid);
            return;
        } else if (target > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

}

ElementIndex([3, 4, 6, 7, 9, 12, 16, 17], 12); 
