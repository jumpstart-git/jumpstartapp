function addWidgetsregistrationDonePage() {
    registrationDonePage.setDefaultUnit(kony.flex.DP);
    var registrationDonePageHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "registrationDonePageHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    registrationDonePageHeader.setDefaultUnit(kony.flex.DP);
    var registrationDonePageCompanyLogo = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50dp",
        "id": "registrationDonePageCompanyLogo",
        "isVisible": true,
        "skin": "companyLogo",
        "src": "supplynationlogo2x.png",
        "top": "10%",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var registrationDonePageThankYou = new kony.ui.RichText({
        "centerX": "50%",
        "id": "registrationDonePageThankYou",
        "isVisible": true,
        "skin": "jumpStartRTOrange160",
        "text": "Your registration is almost complete",
        "top": "40dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var registerDoneVolunteerPic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "80dp",
        "id": "registerDoneVolunteerPic",
        "isVisible": true,
        "skin": "companyLogo",
        "src": "imgseglogo.png",
        "top": "10%",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    registrationDonePageHeader.add(registrationDonePageCompanyLogo, registrationDonePageThankYou, registerDoneVolunteerPic);
    var registrationDonePageBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "registrationDonePageBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    registrationDonePageBody.setDefaultUnit(kony.flex.DP);
    var registrationDonePageInfo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "registrationDonePageInfo",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "A confirmation email has been to the below email",
        "top": "10dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var emailTxt = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "15%",
        "id": "emailTxt",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox099c0bb41402d4d",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var registrationDonePageTxt = new kony.ui.RichText({
        "centerX": "50%",
        "id": "registrationDonePageTxt",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT100Black",
        "text": "Please check your email prior to logging in with your credential information",
        "top": "10dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var registrationDonePageContinue = new kony.ui.Button({
        "centerX": "50.00%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "registrationDonePageContinue",
        "isVisible": true,
        "onClick": AS_Button_a468a95fbe7e4cafbd454fc5ec558d92,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "top": "10%",
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
    registrationDonePageBody.add(registrationDonePageInfo, emailTxt, registrationDonePageTxt, registrationDonePageContinue);
    registrationDonePage.add(registrationDonePageHeader, registrationDonePageBody);
};

function registrationDonePageGlobals() {
    registrationDonePage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationDonePage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationDonePage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "preShow": AS_Form_f88bb7b8e2064c079e1772aeeafc4396,
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
    registrationDonePage.info = {
        "kuid": "5f8dd29658ec45b489d5e0dfa91b4580"
    };
};