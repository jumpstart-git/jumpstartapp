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
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginHeader.setDefaultUnit(kony.flex.DP);
    var FlexGroup0024f22dee05146 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "FlexGroup0024f22dee05146",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexGroup0024f22dee05146.setDefaultUnit(kony.flex.DP);
    var companyLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "companyLogo",
        "isVisible": true,
        "skin": "companyLogo",
        "src": "jumpstartlogo2x.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexGroup0024f22dee05146.add(companyLogo);
    var CopyloginPageInfo0dbc3b1ffc4c64a = new kony.ui.RichText({
        "centerX": "50.00%",
        "id": "CopyloginPageInfo0dbc3b1ffc4c64a",
        "isVisible": false,
        "skin": "jumpStartRT230",
        "text": "<span style=\"font-weight: bold\">JUMP</span>START",
        "top": 0,
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Label0e726b18d95544a = new kony.ui.Label({
        "centerX": "49.96%",
        "id": "Label0e726b18d95544a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var CopyLabel0ae99a693f6394a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ae99a693f6394a",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel120",
        "text": "Connecting People",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    loginHeader.add(FlexGroup0024f22dee05146, CopyloginPageInfo0dbc3b1ffc4c64a, Label0e726b18d95544a, CopyLabel0ae99a693f6394a);
    var loginBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "loginBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0.00%",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_GO,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var signInButton = new kony.ui.Button({
        "centerX": "50.00%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "signInButton",
        "isVisible": true,
        "onClick": AS_Button_c55a88368de54c408d5a02eef07ad463,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Login",
        "top": "6dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Button076093b19f13149 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "45dp",
        "id": "Button076093b19f13149",
        "isVisible": true,
        "skin": "ngnyBackButton",
        "text": "Register as a volunteer",
        "top": "6dp",
        "width": "80%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    loginBody.add(usernameField, passwordField, signInButton, Button076093b19f13149);
    var loginFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "loginFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginFooter.setDefaultUnit(kony.flex.DP);
    var loginRegisterLink = new kony.ui.RichText({
        "centerX": "50%",
        "id": "loginRegisterLink",
        "isVisible": false,
        "linkSkin": "CopyslRichText09c893bc72d674b",
        "onTouchStart": AS_RichText_58183f113bfb4950a774c5437a2f1324,
        "skin": "ngnyGrayLinkText",
        "text": "<u>Register as a skilled volunteer</u>",
        "top": "13dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var forgotPasswordLink = new kony.ui.RichText({
        "centerX": "50%",
        "id": "forgotPasswordLink",
        "isVisible": true,
        "linkSkin": "CopyslRichText09c893bc72d674b",
        "onTouchStart": AS_RichText_bab7a79099ac4a409c36fc1f1e48d543,
        "skin": "ngnyGrayLinkText",
        "text": "<u>Forgot password?</u>",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var needHelpLink = new kony.ui.RichText({
        "centerX": "50%",
        "id": "needHelpLink",
        "isVisible": true,
        "linkSkin": "CopyslRichText09c893bc72d674b",
        "onClick": AS_RichText_25939b8e86014441b5a47e1b246b12e6,
        "onTouchStart": AS_RichText_101d5ce6c83f4b2885695188561bfa47,
        "skin": "ngnyGrayLinkText",
        "text": "<u>Need help?</u>",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    loginFooter.add(loginRegisterLink, forgotPasswordLink, needHelpLink);
    var loginImages = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "10%",
        "id": "loginImages",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    loginImages.setDefaultUnit(kony.flex.DP);
    var imgNew = new kony.ui.Image2({
        "bottom": "0dp",
        "height": "100%",
        "id": "imgNew",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "supplynationimgs_new.png",
        "top": "1dp",
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
        "skin": "ngnyOrangeLabelText",
        "text": "Logging in for the first time?",
        "top": "15dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "top": "10dp",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ReceiveCodeLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "ReceiveCodeLbl",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel0288ac2269f664b",
        "text": "Did not receive your code?",
        "top": "51%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var resentCode = new kony.ui.RichText({
        "centerX": "50%",
        "height": "17.03%",
        "id": "resentCode",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_RichText_6a82d8aa4fcc448fb084c717b0967987,
        "onTouchStart": AS_RichText_ba3a520a0bd6464caf7feb4297050d6d,
        "skin": "ngnyGrayLinkText",
        "text": "<u>Resend code to your email</u>\n",
        "top": "160dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
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
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "submitBtn",
        "isVisible": true,
        "left": "50%",
        "onClick": AS_Button_102be19028bf4b8e8c5f3de8263022bb,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "top": "10%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var cancelBtn = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyBackButton",
        "height": "45dp",
        "id": "cancelBtn",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_a7a9f65b40a4414e8b46666fee11aefd,
        "skin": "ngnyBackButton",
        "text": "Back",
        "top": "10%",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
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
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    login.info = {
        "kuid": "bec1f033db6f4a3190ecdff43c7dc04e"
    };
};