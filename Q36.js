// Remove Duplicate from an array

function Duplicate(array){
  let newArray = [];

  for(let i=0 ; i< array.length ; i++){
    if(!newArray.includes(array[i])){
      newArray.push(array[i])
    }
  }

  console.log(newArray)
}

Duplicate([12,1,12,3,4,12,22,213,66])
