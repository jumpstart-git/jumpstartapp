function addWidgetsregistrationPage() {
    registrationPage.setDefaultUnit(kony.flex.DP);
    var registrationPageHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "registrationPageHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBGFFF",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    registrationPageHeader.setDefaultUnit(kony.flex.DP);
    var regHeaderSubHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "67.95%",
        "id": "regHeaderSubHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "23dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regHeaderSubHeader.setDefaultUnit(kony.flex.DP);
    var regGreeting = new kony.ui.Label({
        "centerX": "50%",
        "id": "regGreeting",
        "isVisible": true,
        "skin": "jumpStartLabel120",
        "text": "Welcome to JumpStart!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "8%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var regHeaderPic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "100dp",
        "id": "regHeaderPic",
        "isVisible": true,
        "onTouchStart": AS_Image_03b6c3d236894551a5decbc650f84125,
        "skin": "slImage",
        "src": "imgseglogo.png",
        "top": "12%",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regHeaderPicLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "regHeaderPicLabel",
        "isVisible": true,
        "skin": "ngnyGreenLabel",
        "text": "Click the above icon to upload a profile image",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var regSelectionLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "regSelectionLabel",
        "isVisible": true,
        "skin": "jumpStartLabel120",
        "text": "Click continue to proceed with registering as a skilled volunteer",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    regHeaderSubHeader.add(regGreeting, regHeaderPic, regHeaderPicLabel, regSelectionLabel);
    var regSelectionParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "regSelectionParent",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regSelectionParent.setDefaultUnit(kony.flex.DP);
    var regSelectVolunteer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "regSelectVolunteer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c9719fd7725f4f",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    regSelectVolunteer.setDefaultUnit(kony.flex.DP);
    var regVolunteerLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "regVolunteerLabel",
        "isVisible": true,
        "skin": "ngnyWhiteLabelText",
        "text": "Skilled Volunteer",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "60%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    regSelectVolunteer.add(regVolunteerLabel);
    var regSelectBusiness = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "regSelectBusiness",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFF",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    regSelectBusiness.setDefaultUnit(kony.flex.DP);
    var regBusinessLabel = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "regBusinessLabel",
        "isVisible": true,
        "skin": "jumpStartLabel120",
        "text": "Indigenous Business",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "60%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    regSelectBusiness.add(regBusinessLabel);
    regSelectionParent.add(regSelectVolunteer, regSelectBusiness);
    var regInfoParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "22.31%",
        "id": "regInfoParent",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "ngnyWhiteFlexBG",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regInfoParent.setDefaultUnit(kony.flex.DP);
    var regInfoText = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "50%",
        "id": "regInfoText",
        "isVisible": true,
        "skin": "jumpStartRT100",
        "text": "Skilled Volunteers will be able to lend their technical know-how to help grow Indigenous Businesses",
        "width": "65%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    regInfoParent.add(regInfoText);
    registrationPageHeader.add(regHeaderSubHeader, regSelectionParent, regInfoParent);
    var registrationPageFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "5%",
        "clipBounds": true,
        "height": "8%",
        "id": "registrationPageFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    registrationPageFooter.setDefaultUnit(kony.flex.DP);
    var registrationCancelButton = new kony.ui.Button({
        "focusSkin": "jumpStartGrayButton110",
        "height": "45dp",
        "id": "registrationCancelButton",
        "isVisible": true,
        "onClick": AS_Button_063412544d60470685da5107ca9ccd90,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var registrationSubmitButton = new kony.ui.Button({
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "registrationSubmitButton",
        "isVisible": true,
        "left": 6,
        "onClick": AS_Button_2c9ae795eb29424bae81f77c391655ae,
        "right": "-13%",
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    registrationPageFooter.add(registrationCancelButton, registrationSubmitButton);
    registrationPage.add(registrationPageHeader, registrationPageFooter);
};

function registrationPageGlobals() {
    registrationPage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationPage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationPage",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "jumpStartFormBGFFF"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
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