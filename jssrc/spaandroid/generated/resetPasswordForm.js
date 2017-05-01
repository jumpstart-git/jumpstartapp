function addWidgetsresetPasswordForm() {
    resetPasswordForm.setDefaultUnit(kony.flex.DP);
    var resetPasswordFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "resetPasswordFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    resetPasswordFlex.setDefaultUnit(kony.flex.DP);
    var resetPasswordHeaderFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "resetPasswordHeaderFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f4aa1c753afb47",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    resetPasswordHeaderFlex.setDefaultUnit(kony.flex.DP);
    var BtnFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "BtnFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "20%",
        "width": "5%",
        "zIndex": 1
    }, {}, {});
    BtnFlex.setDefaultUnit(kony.flex.DP);
    var backBtn = new kony.ui.Button({
        "height": "100%",
        "id": "backBtn",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_24626042ea3c4c8c8cb8dcee6fe73a5a,
        "skin": "CopyslButtonGlossBlue016905a3e116d4d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    BtnFlex.add(backBtn);
    var HeadingFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "HeadingFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "15%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    HeadingFlex.setDefaultUnit(kony.flex.DP);
    var resetPswdheading = new kony.ui.Label({
        "height": "100%",
        "id": "resetPswdheading",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel040102c3d3b924d",
        "text": "Back to login",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    HeadingFlex.add(resetPswdheading);
    resetPasswordHeaderFlex.add(BtnFlex, HeadingFlex);
    var resetPasswordBodyFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "resetPasswordBodyFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    resetPasswordBodyFlex.setDefaultUnit(kony.flex.DP);
    var resetPswdBodyHdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "resetPswdBodyHdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    resetPswdBodyHdr.setDefaultUnit(kony.flex.DP);
    var forgotPswdHdrLbl = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "forgotPswdHdrLbl",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0c82ef37e04224f",
        "text": "Forgot my password",
        "top": "25%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var fogotPawdLblText = new kony.ui.Label({
        "centerX": "50%",
        "id": "fogotPawdLblText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0013ebdbc54264c",
        "text": "Enter the email you used to register your account",
        "top": "50%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    resetPswdBodyHdr.add(forgotPswdHdrLbl, fogotPawdLblText);
    resetPasswordBodyFlex.add(resetPswdBodyHdr);
    var resetPasswordFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "resetPasswordFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    resetPasswordFooter.setDefaultUnit(kony.flex.DP);
    var emailTxtBox = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "45dp",
        "id": "emailTxtBox",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Email address",
        "secureTextEntry": false,
        "skin": "CopyslTextBox05a24bb3615bc44",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var paswdResetLblText = new kony.ui.Label({
        "centerX": "50%",
        "id": "paswdResetLblText",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel05e03a89db94f48",
        "text": "An email will be sent to you with instructions on how to set your password.",
        "top": "40%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var passwordResetBtn = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "passwordResetBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_c529ff9f155a4abc8243ba9063d985f6,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Reset Password",
        "top": "15%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var needHelpLink = new kony.ui.RichText({
        "centerX": "50%",
        "height": "8%",
        "id": "needHelpLink",
        "isVisible": true,
        "left": "0dp",
        "onTouchStart": AS_RichText_b2cac1454f9a4a5b96e68047bb6a8db9,
        "skin": "CopyslRichText09a9bccbec21a47",
        "text": "<u>Need help?</u>",
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    resetPasswordFooter.add(emailTxtBox, paswdResetLblText, passwordResetBtn, needHelpLink);
    resetPasswordFlex.add(resetPasswordHeaderFlex, resetPasswordBodyFlex, resetPasswordFooter);
    resetPasswordForm.add(resetPasswordFlex);
};

function resetPasswordFormGlobals() {
    resetPasswordForm = new kony.ui.Form2({
        "addWidgets": addWidgetsresetPasswordForm,
        "enabledForIdleTimeout": false,
        "id": "resetPasswordForm",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm041c19ee9ce1243"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    resetPasswordForm.info = {
        "kuid": "8d1a8a5e3c8c4962afd0af44622433f3"
    };
};