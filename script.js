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
var validChar = [];
var passLength = 0;

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

  passLength = parseInt(prompt("How many characters would you like in your password? Choose any number from 8 to 128."));
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
//function has user confirm which characters to include
function charParam() {
  var lowerCase = confirm("Include lowercase letters?");
  if (lowerCase) {
    validChar = validChar.concat(low);
  }
  var upperCase = confirm("Include upper case letters?");
  if (upperCase) {
    validChar = validChar.concat(cap);
  }
  var specChar = confirm("Include special characters?");
  if (specChar) {
    validChar = validChar.concat(spec);
  }
  var numbers = confirm("Include numbers?");
  if (numbers) {
    validChar = validChar.concat(num);
  }

  //array including all characters which password is to be generated from
  console.log(validChar);

}

function generatePassword() {
  var passFin = "";
  for (var i = 0; i < passLength; i++) {
    var random = validChar[Math.floor(Math.random() * validChar.length)];
    console.log(random);
    passFin += random;
  }
  return passFin;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}
