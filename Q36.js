// Remove Duplicate from an array

function Duplicate(array){
  let newArray = [];

  for(let i=0 ; i<array.length ; i++){
    if(!newArray.includes(array[i])){
      newArray.push(array[i])
    }
  }

  console.log(newArray)
}

Duplicate([1,1,2,3,4,4,5,6,7,8,8])
