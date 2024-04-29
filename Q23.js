// Write a C program to read any day number in integer and display the day name in word format.
// Test Data :
// 4

let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

let dayNumber = 7;

for(let i = dayNumber-1 ; i <= days.length ; i++){
    console.log(days[i])
    break
}