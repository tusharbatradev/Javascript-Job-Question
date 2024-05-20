// Write a C program to read temperature in centigrade and display a suitable message according to the temperature state below:
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot

function TemperatureReader(temperature){
  if(temperature < 0){
    console.log(`Freezing weather`)
  } else if(temperature>=0 && temperature<=10){
    console.log(`Very Cold weather`)
  } else if(temperature>10 && temperature<=20){
    console.log(`Cold weather`)
  } else if(temperature>20 && temperature<=30){
    console.log(`Normal weather`)
  } else if(temperature>30 && temperature<=40){
    console.log(`Hot weather`)
  } else{
    console.log(`Very Hot weather`)
  }
}

TemperatureReader(30)
