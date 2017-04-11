function addWidgetsregistrationAccountPage() {
    registrationAccountPage.setDefaultUnit(kony.flex.DP);
    var regAccountInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "regAccountInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    regAccountInfoContainer.setDefaultUnit(kony.flex.DP);
    var registrationPageAccountTitle = new kony.ui.Label({
        "bottom": "20dp",
        "centerX": "50%",
        "id": "registrationPageAccountTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel180",
        "text": "Log In details",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regEmailAddressTitle = new kony.ui.Label({
        "id": "regEmailAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Email address*",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regEmailAddressInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regEmailAddressInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_dec149723ae44feda7c94d18d3e123f7,
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    var regPasswordTitle = new kony.ui.Label({
        "id": "regPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Password*",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regPasswordInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regPasswordInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_dec149723ae44feda7c94d18d3e123f7,
        "secureTextEntry": true,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    var Label00faa1b8d9e104f = new kony.ui.Label({
        "id": "Label00faa1b8d9e104f",
        "isVisible": true,
        "left": "-0.03%",
        "skin": "CopyslLabel0414eebbc0e934e",
        "text": "Password must contain 8 characters,1 special and 1 capital letter",
        "top": "1%",
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
    var regReenterPasswordTitle = new kony.ui.Label({
        "id": "regReenterPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Re-enter password*",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regReenterPasswordInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "regReenterPasswordInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_dec149723ae44feda7c94d18d3e123f7,
        "secureTextEntry": true,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    regAccountInfoContainer.add(registrationPageAccountTitle, regEmailAddressTitle, regEmailAddressInput, regPasswordTitle, regPasswordInput, Label00faa1b8d9e104f, regReenterPasswordTitle, regReenterPasswordInput);
    var regAccountInfoFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8.04%",
        "id": "regAccountInfoFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "13dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regAccountInfoFooter.setDefaultUnit(kony.flex.DP);
    var regAccountInfoBackButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "45dp",
        "id": "regAccountInfoBackButton",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_f27476381d2c47589514da1ebb5535c3,
        "skin": "ngnyBackButton",
        "text": "Back",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var regAccountInfoContinueButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "regAccountInfoContinueButton",
        "isVisible": true,
        "left": 6,
        "onClick": AS_Button_bcbbff717f3d44baa85e01e8e388552d,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    regAccountInfoFooter.add(regAccountInfoBackButton, regAccountInfoContinueButton);
    registrationAccountPage.add(regAccountInfoContainer, regAccountInfoFooter);
};

function registrationAccountPageGlobals() {
    registrationAccountPage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationAccountPage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationAccountPage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "jumpStartFormBGFFF"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
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
    registrationAccountPage.info = {
        "notesId": "536f7e9fe153427d92b5be23fc9c32de",
        "kuid": "536f7e9fe153427d92b5be23fc9c32de"
    };
};