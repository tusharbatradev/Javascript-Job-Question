// Write a C program to read temperature in centigrade and display a suitable message according to the temperature state below:
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot

function temperatureReader(temp) {
  if (temp < 0) {
    console.log(`Freezing Weather`);
  } else if (temp >= 0 && temp <= 10) {
    console.log(`Very Cold Weather`);
  } else if (temp >= 11 && temp <= 20) {
    console.log(`Cold Weather`);
  } else if (temp >= 21 && temp <= 30) {
    console.log(`Normal Weather`);
  } else if (temp >= 31 && temp <= 40) {
    console.log(`Hot Weather`);
  } else {
    console.log(`Very Hot Weather`);
  }
}

temperatureReader(43);
