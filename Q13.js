// Write a C program to determine eligibility for admission to a professional course based on the following criteria: Go to the editor Eligibility Criteria :
// Marks in Maths >=65 and
// Marks in Phy >=55 and
// Marks in Chem>=50 and
// Total in all three subject >=190 or
// Total in Maths and Physics >=140

// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
// Total marks of Maths and Physics : 137
//  The candidate is not eligible.

function CandidateEligibility(maths, phy, chem) {
  let eligibility = false;
  let totalMarks = maths + phy + chem;
  if (
    maths >= 65 &&
    phy >= 55 &&
    chem >= 50 &&
    (totalMarks >= 190 || maths + phy >= 140)
  ) {
    eligibility = true ;
  } else{
    eligibility = false
  }

  if(eligibility === true){
    console.log('The candidate is eligible.')
  } else{
    console.log('The candidate is not eligible.')
  }
}

CandidateEligibility(65,55,72)