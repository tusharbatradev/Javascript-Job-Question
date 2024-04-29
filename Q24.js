// Write a program in C to read any digit and display it in the word.
// Test Data :
// 4
// Expected Output :
// Four

let Spellings = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine']

let digit = 1;

for(let i = digit-1 ; i <= Spellings.length ; i++){
    console.log(Spellings[i])
    break
}