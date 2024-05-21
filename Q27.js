// Reverse a string.

function Reverse(string){
    let array = string.split('');

    let reversedArray = array.reverse();

    let reversedString = reversedArray.join('')

    console.log(reversedString)
}

Reverse('Tushar')