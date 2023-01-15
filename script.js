// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let numOfChar;
let usedChar =[];
// Function to prompt user for password options
function getPasswordOptions() {
numOfChar = parseInt(prompt("Please choose a number of characters between 10 and 64"));
// if statements to validate that user inputs correct information.
if (isNaN(numOfChar)){
  alert("Please enter a number.");
  return;
}
if( numOfChar < 10){
  alert("Password must be 10 characters or more.");
  return;
}
if ( numOfChar > 64){
  alert("Password must be less than 64 characters.");
  return;
}
// variable for all the inputs we need.
let specialChar = confirm('Would you like to use special characters?');
let upperCase = confirm("Would you like to use uppercase letters?");
let lowerCase =confirm("Would you like to use lowercase letters?");
let NumericCase = confirm("Would you like to use numbers?");
// validation to ensure the user chooses at least one choice.
if (specialChar === false && upperCase === false && lowerCase === false && NumericCase === false){
  alert("You must pick at least one option.");
  return;
}
// object used to store all of the variables we need.
let PasswordOptions = {
  length: numOfChar,
  isUpperCase: upperCase,
  isLowerCase: lowerCase,
  isSpecialChar: specialChar,
  isNumericCase: NumericCase,
};
// used to create new array containing existing array if returns true.
if (PasswordOptions.isSpecialChar === true){
usedChar = usedChar.concat(specialCharacters);
}
if ( PasswordOptions.isUpperCase === true){
usedChar = usedChar.concat(upperCasedCharacters);
}
if (PasswordOptions.isLowerCase === true){
usedChar = usedChar.concat(lowerCasedCharacters);
}
if(PasswordOptions.isNumericCase === true){
usedChar = usedChar.concat(numericCharacters);
}
};



// Function for getting a random element from an array
function getRandom(arr) {
let randomNumber = Math.floor(Math.random()* arr.length);
return arr[randomNumber];
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  for (let i=0; i < numOfChar; i++){
password += getRandom(usedChar);
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(){;
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
