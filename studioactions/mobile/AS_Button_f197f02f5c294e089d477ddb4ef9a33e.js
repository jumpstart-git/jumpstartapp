function AS_Button_f197f02f5c294e089d477ddb4ef9a33e(eventobject) {
    var email = BusinessProfile.ChangePasswordBOdyContainer.loggedInBusinessEmailId.text;
    var oldPass = BusinessProfile.ChangePasswordBOdyContainer.CurrentPasswordInputField.text;
    var enterPass = BusinessProfile.ChangePasswordBOdyContainer.NewPasswordTextInput.text;
    var reenterNewPass = BusinessProfile.ChangePasswordBOdyContainer.ReEnterNewpasswordInputField.text;
    if (oldPass == "null" || oldPass == null || oldPass == "") {
        alert("Enter current password");
        return false;
    }
    if (enterPass == "null" || enterPass == null || enterPass == "") {
        alert("Enter new password");
        return false;
    } else {
        var isValidPasswordBus = validatePasswordForBusiness(enterPass);
        //alert("isValidPasswordBus"+isValidPasswordBus);
        // isValidPasswordBus = validatePassword();
        if (isValidPasswordBus == 1) {
            validationAlert("Password Error", "Passwords must have at least " + userValidation.passwordLength + " characters");
            return false;
        } else if (isValidPasswordBus == 2) {
            validationAlert("Password Error", "Passwords must have at least 1 special character");
            return false;
        } else if (isValidPasswordBus == 3) {
            validationAlert("Password Error", "Passwords must have at least 1 digit");
            return false;
        } else if (isValidPasswordBus == 4) {
            validationAlert("Password Error", "Passwords must have at least 1 capital letter");
            return false;
        }
    }
    if (reenterNewPass == "null" || reenterNewPass == null || reenterNewPass == "") {
        alert("Re-enter new password");
        return false;
    } else if (reenterNewPass != enterPass) {
        alert("New password and re-wntered new password are not matching");
        return false;
    } else if ((oldPass == enterPass) && (oldPass == reenterNewPass)) {
        alert("Do not repeat old password. Please enter new password");
        return false;
    } else {
        BusinessBusinessChangePassword();
    }
}