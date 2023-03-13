// Assignment code here
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65)
  }
  
  function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random()* 14) + 33)
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48)
    }   
  
  console.log(getRandomNumber() + getRandomUpper() + getRandomLower() + getRandomSymbol())
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Prompts
  function getOptions () {
    let wantsNumbers = confirm('Would you like to include numbers?')
    let wantsUppercase = confirm('Would you like to include uppercase letters?')
    let wantsLowercase = confirm('Would you like to include lowercase letters?')
    let wantsSymbols = confirm('Would you like to include symbols?')
    let charAmount = prompt("Enter how many characters you would like your password to be(must be between 8-128)")
      if (charAmount < 8 || charAmount > 128) {
        alert ("Invalid character amount, please try again")
      }
    let options = {
      numbers: wantsNumbers = true,
      uppercase: wantsUppercase = true,
      lowercase: wantsLowercase = true,
      symbols: wantsSymbols = true,
      charLength: charAmount
    }
    console.log(options)
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", getOptions);
  
  