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
        "skin": "jumpStartBGFFF",
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
    var CopyloginPageInfo0dbc3b1ffc4c64a = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyloginPageInfo0dbc3b1ffc4c64a",
        "isVisible": true,
        "skin": "jumpStartRT230",
        "text": "<span style=\"font-weight: bold\">JUMP</span>START",
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0e726b18d95544a = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0e726b18d95544a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120",
        "text": "Skilled Volunteer",
        "top": "5dp",
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
    var CopyLabel0ae99a693f6394a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ae99a693f6394a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120",
        "text": "Matching App",
        "top": "0dp",
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
    loginHeader.add(CopyloginPageInfo0dbc3b1ffc4c64a, Label0e726b18d95544a, CopyLabel0ae99a693f6394a);
    var loginBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
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
    var usernameField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.00%",
        "height": "50dp",
        "id": "usernameField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox04ce2606b588643",
        "text": "MyVolunteer",
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
    var passwordField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.00%",
        "height": "50dp",
        "id": "passwordField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": true,
        "skin": "CopyslTextBox04ce2606b588643",
        "text": "password",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "-1dp",
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
        "focusSkin": "jumpStartGreenButton120",
        "height": "50dp",
        "id": "signInButton",
        "isVisible": true,
        "onClick": AS_Button_c55a88368de54c408d5a02eef07ad463,
        "skin": "jumpStartGreenButton110",
        "text": "Login",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    loginBody.add(usernameField, passwordField, signInButton);
    var loginFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
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
    var loginRegisterLink = new kony.ui.Label({
        "centerX": "50%",
        "id": "loginRegisterLink",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_Label_2e641c70f5f84f80bb2d8fe88102e950,
        "skin": "jumpStartLabelGreen120",
        "text": "Register",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    loginFooter.add(loginRegisterLink);
    loginContainer.add(loginHeader, loginBody, loginFooter);
    login.add(loginContainer);
};

function loginGlobals() {
    login = new kony.ui.Form2({
        "addWidgets": addWidgetslogin,
        "enableScrolling": false,
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