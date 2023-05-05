// Query the DOM for the generate button
var generateBtn = document.querySelector("#generate");

// Prompt for or randomly generate the length of the password
function getLength() {
    // Declare a variable to store the length of the password
    var length;
    // Prompt the user if they would like to specify the length of their password or use a random length
    if ( confirm( "Would you like to specify the length of your password or use a random length?" ) ) {
        // Prompt the user for the length of their password and store the input as a number
        length = Number( prompt("How long (between 8 and 128 characters) would you like your password to be?") );

        // Validate if the user's input is a number between 8 and 128 and prompt again if the input is invalid
        while (length < 8 || length > 128) {
            alert( "Invalid length. Please enter a number between 8 and 128." );
            length = Number( prompt("How long (between 8 and 128 characters) would you like your password to be?") );
        }

        // Return the validated length
        return length;
    } else {
        // TODO: Calculate a random length between 8 and 128

        // TODO: Return a random length
        return 8;
    }
}

// Write password to the #password input
function writePassword() {
    // Present user with a series of confirmation dialogs and and prompts for password criteria
    var passwordLength = getLength();
    var passwordLowercase = confirm("Would you like to include lowercase letters?");
    var passwordUppercase = confirm("Would you like to include uppercase letters?");
    var passwordNumbers = confirm("Would you like to include numbers?");
    var passwordSpecial = confirm("Would you like to include special characters?");

    // var password = generatePassword(passwordLength, passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecial);    
    var passwordText = document.querySelector("#password");

    // passwordText.value = password;
    passwordText.value = "password";

}

// Add a click event listener to the generate button
generateBtn.addEventListener("click", writePassword);
