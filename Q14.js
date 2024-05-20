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

function StudentDetails(
  rollNo,
  Name,
  physicsMarks,
  chemistryMarks,
  computerApplication
) {

  let totalMarks = physicsMarks + chemistryMarks + computerApplication;

  let percentage = totalMarks/3 ;

  let division;

  if(percentage>=60){
    division = 'first'
  } else if(percentage>=50 && percentage<60){
    division = 'second'
  } else if(percentage>=40 && percentage<50){
    division = 'third'
  } else{
    division = 'fourth'
  }

  console.log(`
    Roll No : ${rollNo}
    Name of Student : ${Name}
    Marks in Physics : ${physicsMarks}
    Marks in Chemistry : ${chemistryMarks}
    Marks in Computer Application : ${computerApplication}
    Total Marks = ${totalMarks}
    Percentage = ${percentage}
    Division = ${division}
    `);
}

StudentDetails(784, "James", 70, 80, 90);
