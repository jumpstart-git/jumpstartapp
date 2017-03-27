//Type your code here
function validatePasswordForBusiness(enterPass) {
                                              
  var specialChars = /[^A-Za-z0-9]/;          // Regexp for special characters
  var digits = /[0-9]+/;                                                      // Regexp for digits
  var capitalLetters = /[A-Z]+/;                    // Regexp for capital letters
 
  if (enterPass.length >= userValidation.passwordLength) {
    
    if (specialChars.test(enterPass)) {
       
      if (digits.test(enterPass)) {
          
        if (capitalLetters.test(enterPass)) {
          return 5;
        } else {
          return 4;
        }
      } else {
        return 3;
      }
    } else {
      return 2;
    }
  } else {
    return 1;
  }
}

