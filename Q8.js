// Write a C program to read the age of a candidate and determine whether he is eligible to cast his/her own vote.

function VotingEligibility(age){
   if(age>=18){
      console.log(`Candidate is eligible to vote`)
   } else{
      console.log(`Candidate is not eligible to vote`)
   }
}

VotingEligibility(18)