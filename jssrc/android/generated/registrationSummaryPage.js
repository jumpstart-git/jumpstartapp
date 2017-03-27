function addWidgetsregistrationSummaryPage() {
    registrationSummaryPage.setDefaultUnit(kony.flex.DP);
    var registrationSummaryContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "registrationSummaryContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    registrationSummaryContainer.setDefaultUnit(kony.flex.DP);
    var Label0ef92e4a265e147 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0ef92e4a265e147",
        "isVisible": true,
        "skin": "jumpStartLabel180",
        "text": "Summary",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    registrationSummaryContainer.add(Label0ef92e4a265e147);
    var registrationSummaryBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "registrationSummaryBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    registrationSummaryBody.setDefaultUnit(kony.flex.DP);
    var summUserNameTitle = new kony.ui.Label({
        "id": "summUserNameTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "User Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summUserNameLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summUserNameLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summEmailTitle = new kony.ui.Label({
        "id": "summEmailTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summEmailLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summEmailLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summContactNumberTitle = new kony.ui.Label({
        "id": "summContactNumberTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Contact",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summContactNumberLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summContactNumberLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summPasswordTitle = new kony.ui.Label({
        "id": "summPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summPasswordLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summPasswordLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summAddressTitle = new kony.ui.Label({
        "id": "summAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Address",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summAddressLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summAddressLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summCompanyTitle = new kony.ui.Label({
        "id": "summCompanyTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Company",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summCompanyLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summCompanyLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summRoleTitle = new kony.ui.Label({
        "id": "summRoleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Role",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summRoleLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summRoleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "98%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summSkillsTitle = new kony.ui.Label({
        "id": "summSkillsTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Skills",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summSkillsRT = new kony.ui.RichText({
        "id": "summSkillsRT",
        "isVisible": true,
        "skin": "jumpStartRT100WBorder",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var summSkillsLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summSkillsLabel",
        "isVisible": false,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summAvailabilityTitle = new kony.ui.Label({
        "id": "summAvailabilityTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Availability",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var summAvailabilityRT = new kony.ui.RichText({
        "bottom": "20dp",
        "id": "summAvailabilityRT",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT100WBorder",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    registrationSummaryBody.add(summUserNameTitle, summUserNameLabel, summEmailTitle, summEmailLabel, summContactNumberTitle, summContactNumberLabel, summPasswordTitle, summPasswordLabel, summAddressTitle, summAddressLabel, summCompanyTitle, summCompanyLabel, summRoleTitle, summRoleLabel, summSkillsTitle, summSkillsRT, summSkillsLabel, summAvailabilityTitle, summAvailabilityRT);
    var registrationPageFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "registrationPageFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "16dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    registrationPageFooter.setDefaultUnit(kony.flex.DP);
    var registrationCancelButton = new kony.ui.Button({
        "focusSkin": "jumpStartGrayButton110",
        "height": "100%",
        "id": "registrationCancelButton",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_fe953aeb6be94dfcb3ee8c7a51645924,
        "skin": "jumpStartGrayButton110",
        "text": "Cancel",
        "width": "46.94%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var registrationSubmitButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton",
        "height": "100%",
        "id": "registrationSubmitButton",
        "isVisible": true,
        "left": 11,
        "onClick": AS_Button_cb90a5ede5774015985fe53dbbc6a6a8,
        "skin": "jump",
        "text": "Register",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    registrationPageFooter.add(registrationCancelButton, registrationSubmitButton);
    registrationSummaryPage.add(registrationSummaryContainer, registrationSummaryBody, registrationPageFooter);
};

function registrationSummaryPageGlobals() {
    registrationSummaryPage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationSummaryPage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationSummaryPage",
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
    registrationSummaryPage.info = {
        "notesId": "288297cd3faf43c5aa0f4c1cb5cd4ef1",
        "kuid": "288297cd3faf43c5aa0f4c1cb5cd4ef1"
    };
};