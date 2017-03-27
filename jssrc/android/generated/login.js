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
        "height": "30%",
        "id": "loginHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox038cb36c9175e46",
        "top": "6dp",
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
        "top": "7dp",
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0ae99a693f6394a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ae99a693f6394a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120",
        "text": "Connecting People",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
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
        "height": "45dp",
        "id": "usernameField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "placeholder": "Email ID",
        "secureTextEntry": false,
        "skin": "CopyslTextBox04ce2606b588643",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
        "zIndex": 2
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var passwordField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50.00%",
        "height": "45dp",
        "id": "passwordField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox04ce2606b588643",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "6dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var signInButton = new kony.ui.Button({
        "centerX": "50.00%",
        "focusSkin": "jumpStartGreenButton",
        "height": "45dp",
        "id": "signInButton",
        "isVisible": true,
        "onClick": AS_Button_c55a88368de54c408d5a02eef07ad463,
        "skin": "jump",
        "text": "Login",
        "top": "6dp",
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
        "height": "20%",
        "id": "loginFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "-1%",
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
        "text": "Register as a skilled volunteer",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "21dp",
        "width": "72%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var forgotPasswordLink = new kony.ui.RichText({
        "centerX": "50%",
        "id": "forgotPasswordLink",
        "isVisible": true,
        "linkSkin": "CopyslRichText09c893bc72d674b",
        "onTouchStart": AS_RichText_40a28652bced44cf8930a409eb1821e0,
        "skin": "jumpStartRtLink100",
        "text": "<u>Forgot password?</u>",
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    loginFooter.add(loginRegisterLink, forgotPasswordLink);
    var loginImages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "loginImages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginImages.setDefaultUnit(kony.flex.DP);
    var imgNew = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNew",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "supplynationimgs_new.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    loginImages.add(imgNew);
    loginContainer.add(loginHeader, loginBody, loginFooter, loginImages);
    var validateCodeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "validateCodeContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0382bdbd8cfc442",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    validateCodeContainer.setDefaultUnit(kony.flex.DP);
    var validateCodeHdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "validateCodeHdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    validateCodeHdr.setDefaultUnit(kony.flex.DP);
    var codeValidationLbl = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "codeValidationLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0ef341893161d42",
        "text": "Logging in for the first time?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    validateCodeHdr.add(codeValidationLbl);
    var validateCodeBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "validateCodeBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    validateCodeBody.setDefaultUnit(kony.flex.DP);
    var userNameLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "userNameLbl",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel0288ac2269f664b",
        "text": "Please enter the code sent to your registered email for account verification.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ReceiveCodeLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "ReceiveCodeLbl",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel0288ac2269f664b",
        "text": "Did not receive your code?",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "51%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var resentCode = new kony.ui.RichText({
        "centerX": "50%",
        "height": "17.03%",
        "id": "resentCode",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_6a82d8aa4fcc448fb084c717b0967987,
        "onTouchStart": AS_RichText_ba3a520a0bd6464caf7feb4297050d6d,
        "skin": "CopyslRichText01225eb7cd5fb40",
        "text": "<u>Resend code to your email</u>\n",
        "top": "160dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var validateCodeText = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "validateCodeText",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "5 digit code",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0151f0bd7671747",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "25%",
        "width": "85%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    validateCodeBody.add(userNameLbl, ReceiveCodeLbl, resentCode, validateCodeText);
    var validatecodeFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "validatecodeFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "80%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    validatecodeFooter.setDefaultUnit(kony.flex.DP);
    var submitBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0717d880851f847",
        "height": "45dp",
        "id": "submitBtn",
        "isVisible": true,
        "left": "51%",
        "onClick": AS_Button_102be19028bf4b8e8c5f3de8263022bb,
        "skin": "CopyslButtonGlossBlue0717d880851f847",
        "text": "Continue",
        "top": "10%",
        "width": "48%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var cancelBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed0bc9cae1915754e",
        "height": "45dp",
        "id": "cancelBtn",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_a7a9f65b40a4414e8b46666fee11aefd,
        "skin": "CopyslButtonGlossBlue0dfeab12c7cd543",
        "text": "Back",
        "top": "10%",
        "width": "48%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    validatecodeFooter.add(submitBtn, cancelBtn);
    validateCodeContainer.add(validateCodeHdr, validateCodeBody, validatecodeFooter);
    login.add(loginContainer, validateCodeContainer);
};

function loginGlobals() {
    login = new kony.ui.Form2({
        "addWidgets": addWidgetslogin,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "login",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_ff88a823a12642bd9500657d6a2e0b06,
        "preShow": AS_Form_7f208b182e46464b9e3855c6d9a6e002,
        "skin": "CopyslForm034fab4ae9be84e"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    login.info = {
        "kuid": "bec1f033db6f4a3190ecdff43c7dc04e"
    };
};