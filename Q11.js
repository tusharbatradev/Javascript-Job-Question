// Write a program to find the largest of three numbers.
// Test Data : 12 25 52

function LargestNumber(n1,n2,n3){
  if(n1>n2 && n1>n3){
    console.log(`${n1} is the largest number`)
  } else if(n2>n1 && n2>n3){
    console.log(`${n2} is the largest number`)
  } else{
    console.log(`${n3} is the largest number`)
  }
}

LargestNumber(12,25,52)