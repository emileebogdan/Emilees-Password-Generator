// creates the character arrays

var characterLength = 8;
var choiceArray = [];
var specCharArray = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','`','~','<','>','/','?'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','h','j','k','i','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

// creates the generate button query 
var generateBtn = document.querySelector("#generate");

// creates the click event 
generateBtn.addEventListener("click", writePassword);

// kicks the password out
function writePassword() {
  var correctPrompts = Prompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts){
    var newPassword = generatePassword ();
    passwordText.value = newPassword;
   } else {
    passwordText.value = "";
   }

}
// creates a random password
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter];
  }
  return password;
}
// asks prompts for password specifications 
function Prompts(){
  choiceArray = [];
  characterLength = parseInt(prompt("How Many Characters do you want your Password to be? (Your Password must be Between 8 and 126 Characters."));
  if (isNaN (characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Your Password Must be Between 8 and 126 Characters. Please Try Again.");
    return false;
  }

  if (confirm("Would you like to add lower case letters in your password?")){
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if (confirm("Would you like to add upper case letters in your password?")){
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Would you like to special characters in your password?")){
    choiceArray = choiceArray.concat(specCharArray);
  }

  if (confirm("Would you like to add numbers in your password?")){
    choiceArray = choiceArray.concat(numberArray);
  }
 
  return true;
}




