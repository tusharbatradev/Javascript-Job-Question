// Find the intersection of two given arrays of integers.

function Intersection(array1,array2){
    let intersectionPoint = [];

    for(let i=0; i<=array1.length ; i++){
        if(array2.includes(array1[i])){
            intersectionPoint.push(array1[i])
        }
    }

    console.log(intersectionPoint)
}

Intersection([1,2,3,4],[3,4,5,6])