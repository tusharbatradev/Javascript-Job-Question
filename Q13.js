// Write a C program to determine eligibility for admission to a professional course based on the following criteria: Go to the editor Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140 ------------------------------------- Input the marks obtained in Physics :65 Input the marks obtained in Chemistry :51 Input the marks obtained in Mathematics :72 Total marks of Maths, Physics and Chemistry : 188 Total marks of Maths and Physics : 137 The candidate is not eligible.

let maths = 72;
let phy = 65;
let chem = 51;

if (
  (maths >= 65 && chem >= 50 && phy >= 55) ||
  (maths + phy + chem >= 190 || maths + phy >= 140)
) {
  console.log(`The candidate is eligible.`);
} else {
  console.log(`The candidate is not eligible.`);
}
