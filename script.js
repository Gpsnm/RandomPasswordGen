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

// Function to prompt user for password options
function getPasswordOptions() {
let numOfChar = parseInt(prompt("Please choose a number of characters between 10 and 64"));
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

let specialChar = confirm('Would you like to use special characters?');
let upperCase = confirm("Would you like to use uppercase letters?");
let lowerCase =confirm("Would you like to use lowercase letters?");
let NumericCase = confirm("Would you like to use numbers?");

if (specialChar === false && upperCase === false && lowerCase === false && NumericCase === false){
  alert("You must pick at least one option.");
  return;
}

let getPasswordOptions = {
  length: numOfChar,
  isUpperCase: upperCase,
  isLowerCase: lowerCase,
  isSpecialChar: specialChar,
  isNumericCase: NumericCase,
};

console.log(getPasswordOptions.isSpecialChar);
console.log(getPasswordOptions.isUpperCase);
console.log(getPasswordOptions.isLowerCase);
console.log(getPasswordOptions.isNumericCase);
}

// Function for getting a random element from an array
function getRandom(arr) {
let randomNumber = Math.floor(Math.random()* arr.length);
console.log(arr[randomNumber]);
return arr[randomNumber];
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);
