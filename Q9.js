// Write a C program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.

// Question meaning
// if m=0 than n=0;
// if m>0 than n=1;
// if m<0 than n=-1

let m = -5;
let n = 0;

if (m < 0) {
  n = -1;
  console.log(`Value of n is ${n}`);
} else if (m > 0) {
  n = 1;
  console.log(`Value of n is ${n}`);
} else {
  n = 0;
  console.log(`Value of n is ${n}`);
}
