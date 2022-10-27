// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  
  var passLength = parseInt(passwordLength);
  console.log(passLength);
  if(isNaN(passLength)){
    alert("Please put a number between 8 and 128")
    generatePassword();
  }
  if (passLength<= 8 || passLength>= 128){
    alert("Required Field: The length must be 8 to 128");
    generatePassword();
  }else 
  console.log("Password length " + passLength);
  
  
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
