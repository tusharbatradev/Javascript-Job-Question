// Write a C program to accept the height of a person in centimeters and categorize the person according to their height.

// Dwarfism is generally defined as an adult height of 4 feet 10 inches (147 centimeters) or less. 

function HeightDetector(height){
    if(height>150){
        console.log('The person is not dwarf')
    } else{
        console.log('The person is dwarf')
    }
}

HeightDetector(190)