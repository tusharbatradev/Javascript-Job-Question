// Write a C program to read the roll no, name and marks of three subjects and calculate the total, percentage and division.
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First

function Promotion(rollNo, Name, physics, chemistry, computerApplication) {
  // Finding Total Marks
  let totalMarks = physics + chemistry + computerApplication;

  // Finding Percantage
  let percentage = physics + chemistry + computerApplication / 3;

  // Finding Division
  let division = "";

  if (percentage >= 60) {
    division = "First";
  } else if (percentage >= 50 && percentage <= 60) {
    division = "Second";
  } else {
    division = "Third";
  }

  console.log(`
    Roll No. = ${rollNo},
    Name = ${Name},
    Marks in Physics = ${physics},
    Marks in Chemistry = ${chemistry},
    Marks in Computer = ${computerApplication},
    Total Marks = ${totalMarks},
    Percantage = ${percentage},
    Division ${division}
    `);
}

Promotion("784", "James", 70, 80, 90);
