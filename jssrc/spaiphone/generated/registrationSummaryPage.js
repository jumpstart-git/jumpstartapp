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
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
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
    var summUserNameLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summUserNameLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summEmailTitle = new kony.ui.Label({
        "id": "summEmailTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Email",
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
    var summEmailLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summEmailLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summContactNumberTitle = new kony.ui.Label({
        "id": "summContactNumberTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Contact",
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
    var summContactNumberLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summContactNumberLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summPasswordTitle = new kony.ui.Label({
        "id": "summPasswordTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Password",
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
    var summPasswordLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summPasswordLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summAddressTitle = new kony.ui.Label({
        "id": "summAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Address",
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
    var summAddressLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summAddressLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summCompanyTitle = new kony.ui.Label({
        "id": "summCompanyTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Company",
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
    var summCompanyLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summCompanyLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summRoleTitle = new kony.ui.Label({
        "id": "summRoleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Role",
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
    var summRoleLabel = new kony.ui.Label({
        "height": "40dp",
        "id": "summRoleLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100WBorder",
        "top": "5dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summSkillsTitle = new kony.ui.Label({
        "id": "summSkillsTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Skills",
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
    var summSkillsRT = new kony.ui.RichText({
        "id": "summSkillsRT",
        "isVisible": true,
        "skin": "jumpStartRT100WBorder",
        "top": "0dp",
        "width": "95%",
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
        "top": "5dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var summAvailabilityTitle = new kony.ui.Label({
        "id": "summAvailabilityTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Availability",
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
    var summAvailabilityRT = new kony.ui.RichText({
        "bottom": "20dp",
        "id": "summAvailabilityRT",
        "isVisible": true,
        "left": "0",
        "skin": "jumpStartRT100WBorder",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    registrationSummaryBody.add(summUserNameTitle, summUserNameLabel, summEmailTitle, summEmailLabel, summContactNumberTitle, summContactNumberLabel, summPasswordTitle, summPasswordLabel, summAddressTitle, summAddressLabel, summCompanyTitle, summCompanyLabel, summRoleTitle, summRoleLabel, summSkillsTitle, summSkillsRT, summSkillsLabel, summAvailabilityTitle, summAvailabilityRT);
    var CopyeligibiltyCriteriFlxScroll0d6a39065171f43 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "24%",
        "horizontalScrollIndicator": true,
        "id": "CopyeligibiltyCriteriFlxScroll0d6a39065171f43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "50dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyeligibiltyCriteriFlxScroll0d6a39065171f43.setDefaultUnit(kony.flex.DP);
    var CopymangersApprovalFlex03ae7b8f29fcb45 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopymangersApprovalFlex03ae7b8f29fcb45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopymangersApprovalFlex03ae7b8f29fcb45.setDefaultUnit(kony.flex.DP);
    var Copyheading021315f55d79a40 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Copyheading021315f55d79a40",
        "isVisible": true,
        "skin": "ngnyOrangeLabelText",
        "text": "Manager's Approval",
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
    var CopytxtLbl0866b5282a16448 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopytxtLbl0866b5282a16448",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel09019c347377142",
        "text": "You all need your manager's approval and consent before understanding this task",
        "top": "40%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    CopymangersApprovalFlex03ae7b8f29fcb45.add(Copyheading021315f55d79a40, CopytxtLbl0866b5282a16448);
    var CopyLegalFlex0fd3d110dd9a947 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "58%",
        "id": "CopyLegalFlex0fd3d110dd9a947",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onTouchMove": AS_FlexContainer_cbcedf5c957d4a0cbb7a59cda06d8abc,
        "onTouchStart": AS_FlexContainer_5e2aa7339ea54ad2832bd61f3d203dc7,
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyLegalFlex0fd3d110dd9a947.setDefaultUnit(kony.flex.DP);
    var CopyLegalLbl0328e1d8997464f = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLegalLbl0328e1d8997464f",
        "isVisible": true,
        "skin": "ngnyOrangeLabelText",
        "text": "Policy Requirements ",
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
    var CopyRichText05ae4cf7d0a8c45 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText05ae4cf7d0a8c45",
        "isVisible": true,
        "left": "101dp",
        "onClick": AS_RichText_8725e935980241a59eec2dd1cde0d619,
        "onTouchStart": AS_RichText_214b052e608a4321b07888227bf903d0,
        "skin": "CopyslRichText08d925a35bfe342",
        "text": "I have read my company’s policies and regulations regarding volunteer work and agree to comply with all the rules and provisions outlined",
        "top": "30dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyLegalFlex0fd3d110dd9a947.add(CopyLegalLbl0328e1d8997464f, CopyRichText05ae4cf7d0a8c45);
    CopyeligibiltyCriteriFlxScroll0d6a39065171f43.add(CopymangersApprovalFlex03ae7b8f29fcb45, CopyLegalFlex0fd3d110dd9a947);
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
        "focusSkin": "ngnyPressedGreenButton",
        "height": "100%",
        "id": "registrationSubmitButton",
        "isVisible": true,
        "left": 11,
        "onClick": AS_Button_cb90a5ede5774015985fe53dbbc6a6a8,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Register",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    registrationPageFooter.add(registrationCancelButton, registrationSubmitButton);
    registrationSummaryPage.add(registrationSummaryContainer, registrationSummaryBody, CopyeligibiltyCriteriFlxScroll0d6a39065171f43, registrationPageFooter);
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
        "retainScrollPosition": false
    });
    registrationSummaryPage.info = {
        "notesId": "288297cd3faf43c5aa0f4c1cb5cd4ef1",
        "kuid": "288297cd3faf43c5aa0f4c1cb5cd4ef1"
    };
};