// Query the DOM for the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // Present user with a series of prompts for password criteria
    var passwordLength = prompt("Would you like to specify the length of your password?");
    var passwordLengthValue = prompt("How many characters would you like your password to be?");
    var passwordLowercase = prompt("Would you like to include lowercase letters?");
    var passwordUppercase = prompt("Would you like to include uppercase letters?");
    var passwordNumbers = prompt("Would you like to include numbers?");
    var passwordSpecial = prompt("Would you like to include special characters?");

    // var password = generatePassword();    
    var passwordText = document.querySelector("#password");

    // passwordText.value = password;
    passwordText.value = "password";

}

// Add a click event listener to the generate button
generateBtn.addEventListener("click", writePassword);
