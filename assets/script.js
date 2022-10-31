// Assignment Code
var generateBtn = document.querySelector("#generate");

// writes the password to the screewn
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//generates the password
function generatePassword() {
  // creates the arrays for character sets
  var lowerString = "abcdefghijklmnopqrstuvwxyz"
  var lowerArray = lowerString.split('');
  var specialString = " !#$%&'()*,-./:;<=>?@[]^_{}|~"
  var specialArray = specialString.split('');
  var numberString = "123456789";
  var numbersArray = numberString.split('');
  var upper = lowerArray.map(x => x.toUpperCase());
  var finalPool = [];
// determines password criteria
  function conAnswers() {
    conLower = confirm("Do you want your password to contain lower case letters?");
    conUpper = confirm("Do you want your password to contain upper case letters?");
    conNumber = confirm("Do you want your password to contain numbers?");
    conSpecial = confirm("Do you want your password to contain special characters?");
  }
  conAnswers();
  // determines if any criteria was selected
  if (!conLower && !conNumber && !conSpecial && !conUpper) {
    alert("You must choose at least 1 of the 4 categories. (Upper case, Lower case, Special characters, or numbers)")
    conAnswers();
    // the rest determines exactly which ones were selected.
  }
  if (conLower) {
    finalPool = finalPool.concat(lowerArray);
  }
  if (conNumber) {
    finalPool = finalPool.concat(numbersArray);
  }
  if (conSpecial) {
    finalPool = finalPool.concat(specialArray);
  }
  if (conUpper) {
    finalPool = finalPool.concat(upper);
  }

  var passwordLength;
  // switchs passwordLength from a string to an int
  var passLength;
  // determines if correct input is given for the number
  function lengthCheck() {
    passwordLength= prompt("How many characters would you like your password? Choose between 8 and 128");
    // changes passwordLength to an int 
    passLength = parseInt(passwordLength)
    if (isNaN(passLength)) {
      alert("Required Field: Please put a number between 8 and 128")
      lengthCheck();
    }
    if (passLength < 8 || passLength > 128) {
      alert("The length must be 8 to 128");
      lengthCheck();
    }
  }
  lengthCheck();
// creates an array that will store each char of the password
  var passwordArray = [];

  for (let i = 0; i < passLength; i++) {
    var passChar = finalPool[Math.floor(Math.random() * finalPool.length)];
    passwordArray.push(passChar);

  }
  // returns the Password array joined into a string
  return passwordArray.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);