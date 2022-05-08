let userInput = document.getElementById("value");
let LengthOfValue = document.getElementById("length-result");
let volumeOfValue = document.getElementById("volume-result")

userInput.value = 0

userInput.addEventListener("keypress", function() {
    newInput = parseInt(userInput.value);
    
    
    // Length
    let convertToMeters = newInput * 3.28084;
    let convertToFeet = newInput * 0.3048000097536;

    LengthOfValue.textContent = newInput + " meters = " + convertToMeters + " feet | " + newInput + " feet = " + convertToFeet + "meters";

    //Volume
    let convertToLitres = newInput * 3.78541;
    let convertToGallons = newInput * 0.264172;

    volumeOfValue.textContent = newInput + " liters = " + convertToGallons  + " gallons | " + newInput + " gallons = " + convertToLitres + "liters";

    console.log(convertToMeters);
    console.log(convertToFeet);
})



// let newInput = parseInt(userInput);
// console.log(newInput);

// let convertToMeters = newInput * 0.3048000097536;
// let converToFeet = newInput * 3.28084;

// console.log(converToFeet);

