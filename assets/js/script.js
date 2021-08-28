//Randomize all valid characters
function generatePassword(passwordLength) {
  var allValidChars = "";
while (true) {
    if (confirm("Do you want to include lowercase letters?"))
      allValidChars += getRandomLower(passwordLength);
      
    console.log(allValidChars)

    if (confirm("Do you want to include uppercase letters?"))
        allValidChars += getRandomUpper(passwordLength);

    if (confirm("Do you want to include numbers?"))
        allValidChars += getRandomNumber(passwordLength);

    if (confirm("Do you want to include special characters?"))
        allValidChars += getRandomSymbol(passwordLength);

    if (allValidChars == "") {
      window.alert("Please choose at least one option!");
    }
    else {
      break;
    }
}
  var password = "";

  for (i = 0; i < passwordLength; i++) {
    password += allValidChars[Math.floor(Math.random() * allValidChars.length)];
  };
  console.log(password);
  return password;

};



// Write password to the #password input
function writePassword(password) {
  var passwordLength = 0;
  while (true) {
    passwordLength = prompt("How long do you want your password to be? Enter a number between 8 and 128 inclusive.");
    passwordLength = parseInt(passwordLength);
    if (passwordLength > 7 && passwordLength < 129)
      break
    window.alert("Please input a number between 8 and 128 inclusive.");
  }
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//select random from options
function getRandomLower(count) {
  response = "";
  while (count > 0){
    response += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    count--;
  }
  return response;
}

function getRandomUpper(count) {
  response = ""
  while (count > 0){
    response += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    count--
  }
  return response;
}

function getRandomNumber(count) {
  response = ""
  while (count > 0){
    response += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    count--
  }
  return response;
}

function getRandomSymbol(count) {
  var symbols = "\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  response = ""
  while (count > 0){
    response += symbols[Math.floor(Math.random() * symbols.length)];
    count--
  }
  return response;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
