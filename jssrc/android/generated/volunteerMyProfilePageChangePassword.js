function addWidgetsvolunteerMyProfilePageChangePassword() {
    volunteerMyProfilePageChangePassword.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfilePageChangePasswordBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "volunteerMyProfilePageChangePasswordBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "onTouchStart": AS_FlexContainer_0fdcb959792b42f7b4527f29a92590bd,
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "90%"
    }, {}, {});
    volunteerMyProfilePageChangePasswordBody.setDefaultUnit(kony.flex.DP);
    var volunteerMyProfileChangePasswordTitle = new kony.ui.Label({
        "id": "volunteerMyProfileChangePasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Enter new password*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var volunteerMyProfileChangePasswordInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileChangePasswordInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_96bd16a6e9b8416aa2b1b88a320dac72,
        "secureTextEntry": true,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var volunteerMyProfileRetypePasswordTitle = new kony.ui.Label({
        "id": "volunteerMyProfileRetypePasswordTitle",
        "isVisible": true,
        "left": "0%",
        "skin": "jumpStartLabel10099",
        "text": "Retype new password*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var volunteerMyProfileRetypePasswordInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "volunteerMyProfileRetypePasswordInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "onTextChange": AS_TextField_917b4c42b41347eb9522667119b2d9e6,
        "secureTextEntry": true,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    volunteerMyProfilePageChangePasswordBody.add(volunteerMyProfileChangePasswordTitle, volunteerMyProfileChangePasswordInput, volunteerMyProfileRetypePasswordTitle, volunteerMyProfileRetypePasswordInput);
    var volunteerMyProfileChangePasswordFooter2Buttons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "49.99%",
        "clipBounds": true,
        "height": "45dp",
        "id": "volunteerMyProfileChangePasswordFooter2Buttons",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "90%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    volunteerMyProfileChangePasswordFooter2Buttons.setDefaultUnit(kony.flex.DP);
    var Cancel = new kony.ui.Button({
        "centerX": "26.129999999999995%",
        "centerY": "47.64%",
        "focusSkin": "jumpStartGrayButton110",
        "height": "45dp",
        "id": "Cancel",
        "isVisible": true,
        "onClick": AS_Button_0c04dbd657cb4d28b40da6a1a8087bb6,
        "skin": "jumpStartGrayButton110",
        "text": "Cancel",
        "width": "46%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Save = new kony.ui.Button({
        "centerX": "74%",
        "centerY": "48.82%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "Save",
        "isVisible": true,
        "onClick": AS_Button_630c4bfcae614ef69500def5999a951d,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Save",
        "width": "46%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    volunteerMyProfileChangePasswordFooter2Buttons.add(Cancel, Save);
    var forgotPswdHdrLbl = new kony.ui.Label({
        "centerX": "50%",
        "height": "10%",
        "id": "forgotPswdHdrLbl",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0c82ef37e04224f",
        "text": "Change my password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    volunteerMyProfilePageChangePassword.add(volunteerMyProfilePageChangePasswordBody, volunteerMyProfileChangePasswordFooter2Buttons, forgotPswdHdrLbl);
};

function volunteerMyProfilePageChangePasswordGlobals() {
    volunteerMyProfilePageChangePassword = new kony.ui.Form2({
        "addWidgets": addWidgetsvolunteerMyProfilePageChangePassword,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "volunteerMyProfilePageChangePassword",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "VolunteerProfilePageChangePassword"
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
};