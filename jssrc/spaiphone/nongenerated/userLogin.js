//Type your code here
var loggedInUserObject = {
    user: ""
};

function doSignIn() {
    var usernameInput = login.usernameField.text;
    var passWordInput = login.passwordField.text;
    var isAuthenticatedUser = false;
    if (usernameInput === "MyVolunteer" && passWordInput === "password") {
        isAuthenticatedUser = true;
        loggedInUserObject.user = "volunteer";
    } else if (usernameInput === "MyBusiness" && passWordInput === "password") {
        isAuthenticatedUser = true;
        loggedInUserObject.user = "indigenousBusiness";
    } else {
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Unauthenticated User",
            "yesLabel": "OK",
            "message": "You shall not pass!",
            "alertHandler": function() {}
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
    if (isAuthenticatedUser) {
        if (loggedInUserObject.user === "volunteer") {
            userInfoPage.show();
        } else if (loggedInUserObject.user === "indigenousBusiness") {
            mainPage.show();
        }
    }
}

function getUserInfo() {
    kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - START: myString");
    kony.print(loggedInUserInfo);
    kony.print("__________________________________________$$$$$$$$$$$$$ DEBUG - END: myString");
    if (loggedInUserObject.user === "volunteer") {
        userInfoPage.nameInfoField.text = loggedInUserInfo.firstName + ' ' + loggedInUserInfo.lastName;
        userInfoPage.addressInfoField.text = loggedInUserInfo.address;
        userInfoPage.companyInfoField.text = loggedInUserInfo.company;
        userInfoPage.roleInfoField.text = loggedInUserInfo.role;
        if (loggedInUserInfo.skills.length) {
            for (var i = 0; i < loggedInUserInfo.skills.length; i++) {
                // Textbox Basic Configuration
                var textboxBC = {
                    id: i,
                    skin: "userInfoPageInputField",
                    focusskin: "userInfoPageInputField",
                    isVisible: true,
                    placeholder: ""
                };
                // Textbox Layout Configuration
                var textboxLC = {
                    hExpand: false, // If set to false, the widget occupies the preferred width. The preferred width of a widget is the sum of its contents width, padding, and margin.
                    margin: [15, 15, 15, 15],
                    padding: [0, 0, 0, 0],
                    containerWeight: 100,
                    marginInPixel: false,
                    paddingInPixel: false,
                    widgetAlignment: constants.WIDGET_ALIGN_TOP_LEFT
                };
                // Textbox Platform Specific Properties configuration
                var textboxPC = {};
                var txtDynamic = new kony.ui.TextBox2(textboxBC, textboxLC, textboxPC);
                txtDynamic.text = loggedInUserInfo.skills[i];
                //         userInfoPage.skillsList.add(txtDynamic);
            }
        }
    } else if (loggedInUserObject.user === "indigenousBusiness") {}
}