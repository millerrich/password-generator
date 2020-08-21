// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  passParam()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function passParam() {
  
  var passLength = prompt("How many characters would you like in your password? Choose any number from 8 to 128.");
  console.log("password length: " + passLength);
  if (isNaN(passLength) || passLength === "") {
    alert("Please enter a valid number 8 - 128");
  } else if (passLength < 8) {
    alert("Please enter a number greater than or equal to 8");
  } else if (passLength > 128) {
    alert("Please enter a number less than or equal to 128");
  }
}  

function charParam () {
  var lowerCase = confirm("Include lowercase letters?");
  var upperCase = confirm("Include upper case letters?");
  var specChar = confirm("Include special characters?");
  var numbers = confirm("Include numbers?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  
}
