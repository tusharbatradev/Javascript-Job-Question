// Write a program to find the largest of three numbers.
// Test Data : 12 25 52

function LargestNum(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is larger than ${num2} and ${num3}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is larger than ${num1} and ${num3}`);
  } else {
    console.log(`${num3} is larger than ${num1} and ${num2}`);
  }
}

LargestNum(12,25,52)