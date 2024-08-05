// Nested Arrays: Write a function that takes an array of arrays as input and flattens it into a single array using a for loop.

function FlattenArray(array){
	let flattenArray = [];

	for(let i=0 ; i<array.length ; i++){
		for(let j=0 ; j<array.length ; j++){
			flattenArray.push(array[i][j])
		}
	}

	console.log(flattenArray)
}

FlattenArray([[1,2,3],[4,5,6],[7,8,9]])