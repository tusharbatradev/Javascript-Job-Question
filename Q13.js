// Write a C program to determine eligibility for admission to a professional course based on the following criteria: Go to the editor Eligibility Criteria : 
// Marks in Maths >=65 and 
// Marks in Phy >=55 and 
// Marks in Chem>=50 and 
// Total in all three subject >=190 or 
// Total in Maths and Physics >=140 ------------------------------------- Input the marks obtained in Physics :65 Input the marks obtained in Chemistry :51 Input the marks obtained in Mathematics :72 Total marks of Maths, Physics and Chemistry : 188 Total marks of Maths and Physics : 137 The candidate is not eligible.

function checkEligibility(maths, phy, chem) {
  let totalMarks = maths + phy + chem;
  let totalMathsAndPhy = maths + phy;

  if (maths >= 65 && phy >= 55 && chem >= 50 && (totalMarks >= 190 || totalMathsAndPhy >= 140)) {
      console.log("The candidate is eligible.");
  } else {
      console.log("The candidate is not eligible.");
  }
}

let physicsMarks = 65;
let chemistryMarks = 51;
let mathMarks = 72;

let totalMarksAllSubjects = 188;

let totalMarksMathsPhysics = 137;

checkEligibility(mathMarks, physicsMarks, chemistryMarks);
