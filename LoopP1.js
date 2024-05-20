// Loop Pattern
// *
// **
// ***
// ****
// *****

// Step1 = find number of lines(row)
// Step2 = Idnetify no. of columns in each row.
// Step3 = Try to find formula reading row and column

// Pattern 1:-
for(let i=0 ; i<5 ; i++){
    let pattern = '';
    for(let j=0 ; j<=i ; j++){
        pattern = pattern + "*"
    }
    console.log(pattern)
}