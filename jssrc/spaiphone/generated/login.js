function addWidgetslogin() {
    login.setDefaultUnit(kony.flex.DP);
    var loginContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "loginContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    loginContainer.setDefaultUnit(kony.flex.DP);
    var loginHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "loginHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginHeader.setDefaultUnit(kony.flex.DP);
    var appName = new kony.ui.Label({
        "centerX": "50%",
        "id": "appName",
        "isVisible": true,
        "skin": "slLabel",
        "text": "JumpStart",
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var loginPageInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "loginPageInfo",
        "isVisible": true,
        "skin": "CopyslRichText0d739a261a2af43",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    loginHeader.add(appName, loginPageInfo);
    var loginBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "loginBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginBody.setDefaultUnit(kony.flex.DP);
    var usernameLabel = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "usernameLabel",
        "isVisible": true,
        "skin": "CopyslLabel03f63a77f2d334b",
        "text": "Username",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var usernameField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.00%",
        "height": "40dp",
        "id": "usernameField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox04ce2606b588643",
        "text": "My",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "80%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var passwordLabel = new kony.ui.Label({
        "centerX": "50.00%",
        "id": "passwordLabel",
        "isVisible": true,
        "skin": "CopyslLabel03f63a77f2d334b",
        "text": "Password",
        "top": 15,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var passwordField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.00%",
        "height": "40dp",
        "id": "passwordField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": true,
        "skin": "CopyslTextBox04ce2606b588643",
        "text": "password",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var signInButton = new kony.ui.Button({
        "centerX": "50.00%",
        "focusSkin": "CopyslButtonGlossBlue0f5e9b292eb6f46",
        "height": "50dp",
        "id": "signInButton",
        "isVisible": true,
        "onClick": AS_Button_c55a88368de54c408d5a02eef07ad463,
        "skin": "jumpStartBlueButton",
        "text": "Sign In",
        "top": "15dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    loginBody.add(usernameLabel, usernameField, passwordLabel, passwordField, signInButton);
    var loginFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "loginFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginFooter.setDefaultUnit(kony.flex.DP);
    loginFooter.add();
    loginContainer.add(loginHeader, loginBody, loginFooter);
    login.add(loginContainer);
};

function loginGlobals() {
    login = new kony.ui.Form2({
        "addWidgets": addWidgetslogin,
        "enabledForIdleTimeout": false,
        "id": "login",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm034fab4ae9be84e"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    login.info = {
        "kuid": "bec1f033db6f4a3190ecdff43c7dc04e"
    };
};