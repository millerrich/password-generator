// Assignment Code
var generateBtn = document.querySelector("#generate");
//capital letters
var allCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var cap = allCap.split("");
  console.log(cap);
//lower case letters
var allLow = "abcdefghijklmnopqrstuvwxyz";
var low = allLow.split("");
  console.log(low);
//special characters
var allSpec = "!@#$%^&*()-=_+;:[{]}";
var spec = allSpec.split("");
  console.log(spec);
//numbers
var allNumbers = "0123456789"
var num = allNumbers.split("");
  console.log(num);


// Write password to the #password input
function writePassword() {
  
  // runs function passParam when generate password button is clicked
  passParam();
   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// function has user input number >= 8 or <= 128
// runs function charParam once parameters are met
function passParam() {
  
  var passLength = parseInt(prompt("How many characters would you like in your password? Choose any number from 8 to 128."));
  console.log("password length: " + passLength);
  if (isNaN(passLength) || passLength === "") {
    alert("Please enter a valid number 8 - 128");
  } else if (passLength < 8) {
    alert("Please enter a number greater than or equal to 8");
  } else if (passLength > 128) {
    alert("Please enter a number less than or equal to 128");
  } else {
    charParam();
  }
}  

function charParam () {
  var lowerCase = confirm("Include lowercase letters?");
    if (lowerCase) {
      low.concat(validChar);
    }
  var upperCase = confirm("Include upper case letters?");
    if (upperCase) {
      cap.concat(validChar);
    }
  var specChar = confirm("Include special characters?");
    if (specChar) {
      spec.concat(validChar);
    }
  var numbers = confirm("Include numbers?");
    if (numbers) {
      num.concat(validChar);
    }
    //array including all characters which password is to be generated from
    var validChar = [];  
    console.log(validChar);
}

function generatePassword() {

} 





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  
}
