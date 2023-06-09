// Query the DOM for the generate button
var generateBtn = document.querySelector("#generate");

// Define constant strings for each of the different character types
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
// Define constant string of escaped special characters from https://owasp.org/www-community/password-special-characters
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Generate a password based on the user's inputs
function generatePassword(length, lowercase, uppercase, numbers, special) {
    // Declare a string to store all possible characters
    var availableCharacters = "";
    // Declare a string variable to store the generated password
    var password = "";

    // If the user wants lowercase letters, add all lowercase letters to the availableCharacters string
    if (lowercase) {
        // Concatenate the lowercaseLetters string to the availableCharacters string
        availableCharacters += lowercaseLetters;
    }
    // If the user wants upercase letters, add all uppercase letters to the availableCharacters string
    if (uppercase) {
        // Concatenate the uppercaseLetters string to the availableCharacters string
        availableCharacters += uppercaseLetters;
    }
    // If the user wants numbers, add all numbers to the availableCharacters string
    if (numbers) {
        // Concatenate the numbers string to the availableCharacters string
        availableCharacters += numbers;
    }
    // If the user wants special characters, add password special characters from https://owasp.org/www-community/password-special-characters to the availableCharacters string
    if (special) {
        // Concatenate the specialCharacters string to the availableCharacters string
        availableCharacters += specialCharacters;
    }

    // Select characters randomly from the availableCharacters string and add to the password string until the passed password length is reached
    for (var i = 0; i < length; i++) {
        // Calculate a random index between 0 and the length of the availableCharacters string
        var randomIndex = Math.floor(Math.random() * availableCharacters.length);
        // Concatenate the character at the randomIndex of the availableCharacters string to the password string
        password += availableCharacters.charAt(randomIndex);
    }

    // Return the generated password
    return password;

}

// Prompt for or randomly generate the length of the password
function getLength() {
    // Declare a variable to store the length of the password
    var length;
    // Prompt the user if they would like to specify the length of their password or use a random length
    if (confirm("Would you like to specify the length of your password or use a random length?")) {
        // Prompt the user for the length of their password and store the input as a number
        length = Number(prompt("How long (between 8 and 128 characters) would you like your password to be?"));

        // Validate if the user's input is a number between 8 and 128 and prompt again if the input is invalid
        while (length < 8 || length > 128) {
            alert("Invalid length. Please enter a number between 8 and 128.");
            length = Number(prompt("How long (between 8 and 128 characters) would you like your password to be?"));
        }

        // Return the validated length
        return length;
    } else {
        // Calculate a random number between 8 and 128 for password length
        length = Math.floor(Math.random() * 121) + 8;

        // Return the random length
        return length;
    }

}

// Write password to the #password input
function writePassword() {
    // Define variables to store the password length and different character types
    var passwordLength, passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecial;

    // Call the getLength funtion to prompt for or randomly generate the length of the password
    passwordLength = getLength();

    // Prompt for and require at least one of the following character types: lowercase, uppercase, numeric, and/or special characters
    do {
        alert("Please select at least one of the following character types: lowercase, uppercase, numeric, and/or special characters.");
        passwordLowercase = confirm("Would you like to include lowercase letters?");
        passwordUppercase = confirm("Would you like to include uppercase letters?");
        passwordNumbers = confirm("Would you like to include numbers?");
        passwordSpecial = confirm("Would you like to include special characters?");
    } while (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial);

    // Call the generatePassowrd function to generate a password based on the user's inputs
    var password = generatePassword(passwordLength, passwordLowercase, passwordUppercase, passwordNumbers, passwordSpecial);

    // Query the DOM for the password testarea
    var passwordText = document.querySelector("#password");

    // Display the generated password in the passwordText textarea
    passwordText.value = password;

}

// Add a click event listener to the generate button that calls the writePassword function
generateBtn.addEventListener("click", writePassword);
