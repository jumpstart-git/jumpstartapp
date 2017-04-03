function login_signInButton_action_onTouchStart(eventobject, x, y) {
    return AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y);
}

function AS_Button_c55a88368de54c408d5a02eef07ad463(eventobject, x, y) {
    var userText = login.loginContainer.loginBody.usernameField.text;
    var passText = login.loginContainer.loginBody.passwordField.text;
    if (userText == "null" || userText == null || userText == "" || passText == "null" || passText == null || passText == "") {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": null,
            "yesLabel": "OK",
            "noLabel": "No",
            "message": "Email ID and Password Field cannot be blank",
            "alertHandler": "null"
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    } else {
        loginService();
    }
}