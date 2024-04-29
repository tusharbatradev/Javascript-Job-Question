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
// let n = 5;
// for(let row = 1; row<=n ; row++){
//     let pattern = ''
//     for(let col = 1; col <= row ; col++){
//         pattern = pattern + "*"
//     }
//     console.log(pattern)
// }

// Pattern2 :-
// ****
// ****
// ****
// ****

// let n = 4;
// for(let row = 1; row<=n ; row++){
//     let pattern = ''
//     for(let col = 1 ; col <= n ; col++){
//         pattern = pattern + '*'
//     }
//     console.log(pattern)
// }


// Pattern 3:-
// ****
// ***
// **
// *
// let n = 4;
// for(let row = 1; row<=n ; row++){
//     let pattern = ''
//     for(let col = 1 ; col <= n-row+1 ; col++){
//         pattern = pattern + '*'
//     }
//     console.log(pattern)
// }

// Pattern4 :-
// 1
// 12
// 123
// 1234
// 12345

let n = 5;

for(let row = 1; row <= n ; row++){
    let pattern = ''
    for(let col = 1 ; col <= row ; col++){
         pattern = pattern + col
    }
    console.log(pattern)
}
