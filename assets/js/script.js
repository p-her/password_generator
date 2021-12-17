// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  if(password == null) {
      return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

    var password = '' ;

    // flag: check to see if the user selected a capital letter
    var capitalLetterFlag = false;

    // flag: check to see if the user selected a number
    var numericFlag = false;

    // flag: check to see if the user selected a special character
    var specialCharacterFlag = false;

 
    var specialCharacters = ['!', '”', '#','$','%','&','(', ')', '*', '+', ',', '-', '.', '/',':',
                             ';', '<', '=', '>', '?', '@','\' , '^',', '`', '~', '}', '{', '|', '_', '[', ']', "'"];
  
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    // hold the number of how many characters are in the password
    var passwordLength;
    
    passwordLength =  window.prompt("Choose a password between 8 to 128 characters");
    
    if(passwordLength !== null) {

        // check to see if the user chooses a password greater than 8 or 128 characters long
        while(passwordLength < 8 || passwordLength > 128) {
            passwordLength =  window.prompt("Choose a password between 8 to 128 characters long."); 
        }
    }
    
    // set count equals to the length of the password that the user chooses to have
    var count = passwordLength;
    
    // check if the password's length is greater than 0
    while(count > 0 ) {

        var confirmCapitalLetter = window.confirm("Would you like to have capital letter in your password?");

        // generate a random number in the range of how many characters are in the alphabets
        var randomNumber = Math.floor(Math.random() * alphabet.length );

        // check to see if the user wants to have a capital letter to be included in the password
        if(confirmCapitalLetter) {        
            // generate a letter based on the randomNumber passing into the alphabet's array
            // and convert it to an uppercase letter
            var capitalLetter = alphabet[randomNumber].toUpperCase();
            
            // concatenate the capital letter into the password
            password += capitalLetter;
     
            // decrement the password's length by 1
            count--;
            
            // set the flag to true
            capitalLetterFlag = true;

            // check to see if count, the password's length equal to zero
            // if yes, then break from the while loop
            if(count == 0) {
                break;
            }
           
           
        }else{
            // generate a lowercase letter
            var smallLetter = alphabet[randomNumber];

            // concatenate the letter to the password
            password += smallLetter;
           
            // decrement count by 1
            count--;

            // break the while loop if count equals zero
            if(count == 0) {
                break;
            }
        }
    
    
        var confirmNumeric = window.confirm('Would you like to have a number in your password?');   
        
        // check if the user selected a number to be included in the password
        if(confirmNumeric)
        {
            // generate a number from 0 to 9
            randomNumber = Math.floor(Math.random() * 10);
           
            // concatenate the number into the password
            password += randomNumber;
            // decrement count by 1
            count--;
            // set the flag to true
            numericFlag = true;
        
            // check if count is equal to 0
            // if yes, then break from while loop
            if(count == 0) {
                break;
            }
        }


        var confirmSpecialCharacter = window.confirm("Would you like to have a special character in your password?");
      
        // check if the user selected a spcial character to be included in the password
        if(confirmSpecialCharacter) {
            // generate a number based on the range of the specialCharacters's array
            randomNumber = Math.floor(Math.random() * specialCharacters.length);

            // generate a special character and concatenate it to the password
            password += specialCharacters[randomNumber];
            // decrement count by 1
            count--;
            // set the flag to true
           specialCharacterFlag = true;
        
            // check if count is equal to 0
            // if yes, then break from the while loop
            if(count == 0) {
                break;
            }
           
        }        
   
    }
   
    // check: if all the flags are true, then return the generated password to the user
    if(capitalLetterFlag && numericFlag && specialCharacterFlag){
        return password;
        
    }else{
        // if one or more flags are not true, then alert a message to let the user
        // knows that his/her password does not meet the requirements and need to generate a
        // new one again
        window.alert('Your password:  ' + password + '  \n needs to has at least one of each type: '+
         'a capital letter, a numeric, and a special character be validated. Please generate a new password.');
        writePassword();
    }
   
}