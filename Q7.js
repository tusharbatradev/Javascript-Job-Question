// Write a js program to find whether a given year is a leap year or not.


function LeapYearValidator(year){
    if(year%4 == 0){
        console.log(`${year} is a Leap Year`)
    } else{
        console.log(`${year} is not a Leap Year`)
    }
}

LeapYearValidator(2016)
