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
        "text": "Account Information",
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var regEmailAddressTitle = new kony.ui.Label({
        "id": "regEmailAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Email Address*",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "autoComplete": false,
        "autoCorrect": false
    });
    var regPasswordTitle = new kony.ui.Label({
        "id": "regPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Password*",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "autoComplete": false,
        "autoCorrect": false
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var regReenterPasswordTitle = new kony.ui.Label({
        "id": "regReenterPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
        "text": "Re-enter password*",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
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
        "autoComplete": false,
        "autoCorrect": false
    });
    regAccountInfoContainer.add(registrationPageAccountTitle, regEmailAddressTitle, regEmailAddressInput, regPasswordTitle, regPasswordInput, Label00faa1b8d9e104f, regReenterPasswordTitle, regReenterPasswordInput);
    var regAccountInfoFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "regAccountInfoFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regAccountInfoFooter.setDefaultUnit(kony.flex.DP);
    var regAccountInfoBackButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "100%",
        "id": "regAccountInfoBackButton",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_f27476381d2c47589514da1ebb5535c3,
        "skin": "jumpStartGrayButton110",
        "text": "Back",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regAccountInfoContinueButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "100%",
        "id": "regAccountInfoContinueButton",
        "isVisible": true,
        "left": 0,
        "onClick": AS_Button_bcbbff717f3d44baa85e01e8e388552d,
        "skin": "jumpStartGreenButton110",
        "text": "Continue",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "retainScrollPosition": false
    });
    registrationAccountPage.info = {
        "notesId": "536f7e9fe153427d92b5be23fc9c32de",
        "kuid": "536f7e9fe153427d92b5be23fc9c32de"
    };
};