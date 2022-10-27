// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// functions is called on click of the button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}
// function used to generate the password
function generatePassword() {
  // first input pass length
  var passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  // switchs passwordLength from a string to an int
  var passLength = parseInt(passwordLength);
  var conUpper;
  var conLower;
  var conSpecial;
  var conNumber;
  // arrays to be used for random generation one for each type selection
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // this line just copies the lower array into uppercase
  var upper = lower.map(x => x.toUpperCase());
  var finalPool = [];

  // determines if correct input is given for the numbers
  if (isNaN(passLength)) {
    alert("Please put a number between 8 and 128")
    generatePassword();
  } if (passLength <= 8 || passLength >= 128) {
    alert("Required Field: The length must be 8 to 128");
    generatePassword();
  } else {
    // confirms what char set the user selects 
    function conAnswers() {
      conLower = confirm("Do you want your password to contain lower case letters?");
      conUpper = confirm("Do you want your password to contain upper case letters?");
      conNumber = confirm("Do you want your password to contain numbers?");
      conSpecial = confirm("Do you want your password to contain special characters?");
    }
    conAnswers();
  }
  // determines if any criteria was selected
  if (!conLower && !conNumber && !conSpecial && !conUpper) {
    alert("You must choose at least 1 of the 4 categories. (Upper case, Lower case, Special characters, and or numbers)")
    conAnswers();
    // the rest determine exactly which ones were selected.
  } else if (conLower && conNumber && conSpecial && conUpper) {
    finalPool = lower.concat(upper, special, number);
    console.log(finalPool);
  } else if (conLower && conNumber && conSpecial) {
    finalPool = lower.concat(number, special);
  } else if (conLower && conNumber && conUpper) {
    finalPool = lower.concat(number, upper);
  } else if (conLower && conSpecial && conUpper) {
    finalPool = lower.concat(special, upper);
  } else if (conNumber && conSpecial && conUpper) {
    finalPool = number.concat(special, upper);
  } else if (conLower && conNumber){
    finalPool = lower.concat(number);
  } else if (conLower && conSpecial){
    finalPool = lower.concat(special);
  } else if (conLower && conUpper){
    finalPool = lower.concat(upper);
  } else if ( conNumber && conSpecial){
    finalPool = number.concat(special);
  } else if ( conNumber && conUpper){
    finalPool = number.concat(upper);
  } else if ( conNumber && conUpper){
    finalPool = number.concat(upper);
  } else if ( conUpper && conSpecial){
    finalPool = upper.concat(special);
  } else if (conUpper){
    finalPool = upper;
  } else if (conNumber){
    finalPool = number;
  } else if (conLower){
    finalPool = lower;
  } else if (conSpecial){
    finalPool = special;
  } 
  // creates an array that will store each char of the password
  passwordArray=[];
  for (let i=0;i<passLength;i++){
    var passChar = finalPool[Math.floor(Math.random() * finalPool.length)];
    passwordArray.push(passChar);

  }
  
 
  // returns the Password array joined 
  return  passwordArray.join("");




}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
