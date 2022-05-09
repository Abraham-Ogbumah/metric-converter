let userInput = document.getElementById("value");
let LengthOfValue = document.getElementById("length-result");
let volumeOfValue = document.getElementById("volume-result");
let massOfValue = document.getElementById("mass-result");

userInput.value = 0

userInput.addEventListener("input", metricConversion)

function metricConversion() {
    newInput = parseInt(userInput.value);
    
    
    // Length
    let convertToMeters = newInput * 3.28084;
    let convertToFeet = newInput * 0.3048000097536;

    LengthOfValue.textContent = newInput + " meters = " + convertToMeters.toFixed(3) + " feet | " + newInput + " feet = " + convertToFeet.toFixed(3) + " meters";

    //Volume
    let convertToLitres = newInput * 3.78541;
    let convertToGallons = newInput * 0.264172;

    volumeOfValue.textContent = newInput + " liters = " + convertToGallons.toFixed(3)  + " gallons | " + newInput + " gallons = " + convertToLitres.toFixed(3) + " liters";

    //Mass
    let convertToPounds = newInput * 2.20462;
    let convertToKilos = newInput * 0.453592;

    massOfValue.textContent = newInput + " kilos = " + convertToPounds.toFixed(3)  + " pounds | " + newInput + " pounds = " + convertToKilos.toFixed(3) + " kilos";
}