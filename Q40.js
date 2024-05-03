// Check if a string is a palindrome.
function Palindrome(string){
    let lowerStr = string.toLowerCase();
    let stringArray = lowerStr.split('');

    let reversedArr = stringArray.reverse();
    let reversedStr = reversedArr.join('')

    if(lowerStr === reversedStr){
        console.log('String is a Palindrome')
    } else{
        console.log('String is not a Palindrome')
    }   
}
let string = 'Radar'

Palindrome(string)