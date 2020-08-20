// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
    var passLength = prompt("How many characters would you like in your password? Choose any number from 8 to 128.");
      console.log("password length: " + passLength);
    
    

  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  
}
