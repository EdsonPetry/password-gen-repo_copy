// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Prompts
function generatePassword() {
  // lets figure out what they want for their password
  let alphabet ='abcdefghijklmnopqrstuvwxyz'
  let availableCharacters= '';

  let wantsNumbers = confirm('Would you like to include numbers?')
  if (wantsNumbers) {
    availableCharacters += '0123456789';
  }

  let wantsUppercase = confirm('Would you like to include uppercase letters?')
  if (wantsUppercase) {
    availableCharacters += alphabet.toLocaleUpperCase();
  }

  let wantsLowercase = confirm('Would you like to include lowercase letters?')
  if (wantsLowercase) {
    availableCharacters += alphabet
  }

  let wantsSymbols = confirm('Would you like to include symbols?')
  if (wantsSymbols) {
    availableCharacters += '!@#$%^&*()_-+={[}]|\:;'
  }

  let charAmount = prompt("Enter how many characters you would like your password to be(must be between 8-128)")
  if (charAmount < 8 || charAmount > 128) {
    alert("Invalid character amount, please try again")
  }

  // concatenate all the desired characters into a 'bank' to be selected from
  let options = {
    numbers: wantsNumbers = true,
    uppercase: wantsUppercase = true,
    lowercase: wantsLowercase = true,
    symbols: wantsSymbols = true,
    charLength: charAmount
  }
  console.log(options)
  // for each character amount we will iterate and concatenate a random character from the bank to the password
  let password = '';
  for (let i=0; i<options.charLength; i++) {
    let randomIndex = Math.floor(Math.random()*availableCharacters.length)  // MATh random = .00000000000001 * 26 => .0000000000026 floored is 0.  .99999999999999 * 26 => 25.99999998 floored is 25 . .5000000001
    let randomCharacter = availableCharacters[randomIndex];
    password+=randomCharacter;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

