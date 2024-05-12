// Write a js program to find whether a given year is a leap year or not.

function LeapYear(year){
    if(year%4 === 0){
        console.log(`${year} is a leap year`)
    } else{
        console.log(`${year} is not a leap year`)
    }
}

LeapYear(2016)

