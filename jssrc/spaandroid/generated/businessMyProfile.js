function addWidgetsbusinessMyProfile() {
    businessMyProfile.setDefaultUnit(kony.flex.DP);
    var businessMyProfileHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "businessMyProfileHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBG249",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    businessMyProfileHeader.setDefaultUnit(kony.flex.DP);
    var businessMyProfileHeaderPic = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "60dp",
        "id": "businessMyProfileHeaderPic",
        "isVisible": true,
        "skin": "CopyslImage0d901f53cd0e349",
        "src": "supplynationlogo.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessMyProfileHeader.add(businessMyProfileHeaderPic);
    var businessMyProfileBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "75%",
        "horizontalScrollIndicator": true,
        "id": "businessMyProfileBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    businessMyProfileBody.setDefaultUnit(kony.flex.DP);
    var bmpBusinessNameTitle = new kony.ui.Label({
        "id": "bmpBusinessNameTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Business Name*",
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
    var bmpBusinessNameInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpBusinessNameInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpNumbersTitle = new kony.ui.Label({
        "id": "bmpNumbersTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "ABN, ACN or AICN*",
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
    var bmpNumbersInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpNumbersInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpBusinessAddressTitle = new kony.ui.Label({
        "id": "bmpBusinessAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Business Address",
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
    var bmpBusinessAddressInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpBusinessAddressInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpOwnershipInfoLabel = new kony.ui.Label({
        "id": "bmpOwnershipInfoLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel110",
        "text": "Ownership information",
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
    var bmpNoOfIndiOwnersTitle = new kony.ui.Label({
        "id": "bmpNoOfIndiOwnersTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "No. of Indigenous Owners*",
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
    var bmpNoOfIndiOwnersInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpNoOfIndiOwnersInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpPercentOfIndiOwnershipTitle = new kony.ui.Label({
        "id": "bmpPercentOfIndiOwnershipTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "% of Indigenous Ownership",
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
    var bmpPercentOfIndiOwnershipInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpPercentOfIndiOwnershipInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpEmpInfoLabel = new kony.ui.Label({
        "id": "bmpEmpInfoLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel110",
        "text": "Employee information",
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
    var bmpNoOfEmployeesTitle = new kony.ui.Label({
        "id": "bmpNoOfEmployeesTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Number of Employees*",
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
    var bmpNoOfEmployeesInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpNoOfEmployeesInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpPercentIndiEmploymentTitle = new kony.ui.Label({
        "id": "bmpPercentIndiEmploymentTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "% of Indigenous Employment",
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
    var bmpPercentIndiEmploymentInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpPercentIndiEmploymentInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpSectorTitle = new kony.ui.Label({
        "id": "bmpSectorTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Business Activity / Sector",
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
    var bmpSectorInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpSectorInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var bmpAffiliationsTitle = new kony.ui.Label({
        "id": "bmpAffiliationsTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Professional Affiliations",
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
    var bmpAffiliationsInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bmpAffiliationsInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5dp",
        "width": "95%",
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
    var AboutBusinessLabel = new kony.ui.Label({
        "id": "AboutBusinessLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "About Business",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var AboutBusinessInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "AboutBusinessInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9dp",
        "width": "95%",
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
    var BusinessSkillsLabel = new kony.ui.Label({
        "id": "BusinessSkillsLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Skills",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var BusinessSkillsInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "BusinessSkillsInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9dp",
        "width": "95%",
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
    var BusinessHoursLabel = new kony.ui.Label({
        "id": "BusinessHoursLabel",
        "isVisible": false,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Hours required from skilled volunteer",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var BusinessHoursInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "BusinessHoursInput",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9dp",
        "width": "98%",
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
    var OpportunitiesLabel = new kony.ui.Label({
        "id": "OpportunitiesLabel",
        "isVisible": false,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Opportunities",
        "top": "12dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var OpportunitiesInputField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "OpportunitiesInputField",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "jumpStartStandardInputField",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9dp",
        "width": "98%",
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
    var bmpReachTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bmpReachTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Business Reach",
        "top": "20dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var bmpReachContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "55dp",
        "id": "bmpReachContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "11dp",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    bmpReachContainer.setDefaultUnit(kony.flex.DP);
    var bmpReachInternationalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpReachInternationalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    bmpReachInternationalButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblInternational = new kony.ui.Label({
        "height": "40dp",
        "id": "lblInternational",
        "isVisible": false,
        "left": "1dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "International",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpReachInternationalButtonContainer.add(lblInternational);
    var bmpReachAustraliaButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpReachAustraliaButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    bmpReachAustraliaButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblAustraliawide = new kony.ui.Label({
        "height": "40dp",
        "id": "lblAustraliawide",
        "isVisible": false,
        "left": "3dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "Australia-wide",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpReachAustraliaButtonContainer.add(lblAustraliawide);
    var bmpReachStateButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpReachStateButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    bmpReachStateButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblStateTerritory = new kony.ui.Label({
        "height": "40dp",
        "id": "lblStateTerritory",
        "isVisible": false,
        "left": "2dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "State/Territory",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpReachStateButtonContainer.add(lblStateTerritory);
    bmpReachContainer.add(bmpReachInternationalButtonContainer, bmpReachAustraliaButtonContainer, bmpReachStateButtonContainer);
    var bmpGovExpTitle = new kony.ui.Label({
        "centerX": "49%",
        "id": "bmpGovExpTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Previous Experience to Government",
        "top": "11dp",
        "width": "95.26%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var bmpGovExpParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpParent.setDefaultUnit(kony.flex.DP);
    var bmpGovExpTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpTop.setDefaultUnit(kony.flex.DP);
    var bmpGovExpLocalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpLocalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpLocalButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblLocalCouncils = new kony.ui.Label({
        "height": "40dp",
        "id": "lblLocalCouncils",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "Local Councils",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpGovExpLocalButtonContainer.add(lblLocalCouncils);
    var bmpGovExpStateButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpStateButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpStateButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblGovtStateTerritory = new kony.ui.Label({
        "height": "40dp",
        "id": "lblGovtStateTerritory",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "State and Territory",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpGovExpStateButtonContainer.add(lblGovtStateTerritory);
    bmpGovExpTop.add(bmpGovExpLocalButtonContainer, bmpGovExpStateButtonContainer);
    var bmpGovExpBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpBottom.setDefaultUnit(kony.flex.DP);
    var bmpGovExpCommonwealthButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpCommonwealthButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpCommonwealthButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblGovtExpCommonwealth = new kony.ui.Label({
        "height": "40dp",
        "id": "lblGovtExpCommonwealth",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "Commonwealth",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpGovExpCommonwealthButtonContainer.add(lblGovtExpCommonwealth);
    var bmpGovExpInternationalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpGovExpInternationalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bmpGovExpInternationalButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblbmpGovExpInternational = new kony.ui.Label({
        "height": "40dp",
        "id": "lblbmpGovExpInternational",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "International",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpGovExpInternationalButtonContainer.add(lblbmpGovExpInternational);
    bmpGovExpBottom.add(bmpGovExpCommonwealthButtonContainer, bmpGovExpInternationalButtonContainer);
    bmpGovExpParent.add(bmpGovExpTop, bmpGovExpBottom);
    var bmpPrivateTitle = new kony.ui.Label({
        "centerX": "49%",
        "id": "bmpPrivateTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Private",
        "top": "20dp",
        "width": "93.75%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var bmpPrivateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40dp",
        "id": "bmpPrivateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    bmpPrivateContainer.setDefaultUnit(kony.flex.DP);
    var bmpPrivateMultinationalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpPrivateMultinationalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bmpPrivateMultinationalButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblbmpPrivateMultinational = new kony.ui.Label({
        "height": "40dp",
        "id": "lblbmpPrivateMultinational",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "Large Multinational",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpPrivateMultinationalButtonContainer.add(lblbmpPrivateMultinational);
    var bmpPrivateSMEButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpPrivateSMEButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bmpPrivateSMEButtonContainer.setDefaultUnit(kony.flex.DP);
    var lblbmpPrivateSME = new kony.ui.Label({
        "height": "40dp",
        "id": "lblbmpPrivateSME",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "Small and Medium Enterprises",
        "top": "0dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpPrivateSMEButtonContainer.add(lblbmpPrivateSME);
    bmpPrivateContainer.add(bmpPrivateMultinationalButtonContainer, bmpPrivateSMEButtonContainer);
    var bmpOtherInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpOtherInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20dp",
        "width": "97%",
        "zIndex": 1
    }, {}, {});
    bmpOtherInfoContainer.setDefaultUnit(kony.flex.DP);
    var flxOtherInfoLabelContainerHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxOtherInfoLabelContainerHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxOtherInfoLabelContainerHeader.setDefaultUnit(kony.flex.DP);
    var bmpNonProfitParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpNonProfitParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1dp",
        "width": "50%"
    }, {}, {});
    bmpNonProfitParent.setDefaultUnit(kony.flex.DP);
    var bmpNonProfitTitle = new kony.ui.Label({
        "centerX": "38.00%",
        "id": "bmpNonProfitTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Not For Profit",
        "top": "0dp",
        "width": "67.38%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpNonProfitParent.add(bmpNonProfitTitle);
    var bmpNoExpParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpNoExpParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    bmpNoExpParent.setDefaultUnit(kony.flex.DP);
    var bmpNoExpTitle = new kony.ui.Label({
        "centerX": "53%",
        "id": "bmpNoExpTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "No Previous Experience",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bmpNoExpParent.add(bmpNoExpTitle);
    flxOtherInfoLabelContainerHeader.add(bmpNonProfitParent, bmpNoExpParent);
    var bpmOtherInfoLabelContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "bpmOtherInfoLabelContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "98%",
        "zIndex": 1
    }, {}, {});
    bpmOtherInfoLabelContainer.setDefaultUnit(kony.flex.DP);
    var bpmNotForProfitLabelContainerFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45dp",
        "id": "bpmNotForProfitLabelContainerFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "width": "50%"
    }, {}, {});
    bpmNotForProfitLabelContainerFooter.setDefaultUnit(kony.flex.DP);
    var lblbmpNonProfit = new kony.ui.Label({
        "bottom": 15,
        "height": "40dp",
        "id": "lblbmpNonProfit",
        "isVisible": false,
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "Not for Profit",
        "top": "5dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bpmNotForProfitLabelContainerFooter.add(lblbmpNonProfit);
    var bpmNotPrevExptLabelContainerFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bpmNotPrevExptLabelContainerFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "width": "50%"
    }, {}, {});
    bpmNotPrevExptLabelContainerFooter.setDefaultUnit(kony.flex.DP);
    var lblbmpNoExp = new kony.ui.Label({
        "height": "40dp",
        "id": "lblbmpNoExp",
        "isVisible": false,
        "left": "5dp",
        "skin": "CopyslLabel0bc3c53060dc444",
        "text": "No Previous Experience",
        "top": "5dp",
        "width": "95%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    bpmNotPrevExptLabelContainerFooter.add(lblbmpNoExp);
    bpmOtherInfoLabelContainer.add(bpmNotForProfitLabelContainerFooter, bpmNotPrevExptLabelContainerFooter);
    bmpOtherInfoContainer.add(flxOtherInfoLabelContainerHeader, bpmOtherInfoLabelContainer);
    businessMyProfileBody.add(bmpBusinessNameTitle, bmpBusinessNameInput, bmpNumbersTitle, bmpNumbersInput, bmpBusinessAddressTitle, bmpBusinessAddressInput, bmpOwnershipInfoLabel, bmpNoOfIndiOwnersTitle, bmpNoOfIndiOwnersInput, bmpPercentOfIndiOwnershipTitle, bmpPercentOfIndiOwnershipInput, bmpEmpInfoLabel, bmpNoOfEmployeesTitle, bmpNoOfEmployeesInput, bmpPercentIndiEmploymentTitle, bmpPercentIndiEmploymentInput, bmpSectorTitle, bmpSectorInput, bmpAffiliationsTitle, bmpAffiliationsInput, AboutBusinessLabel, AboutBusinessInput, BusinessSkillsLabel, BusinessSkillsInput, BusinessHoursLabel, BusinessHoursInput, OpportunitiesLabel, OpportunitiesInputField, bmpReachTitle, bmpReachContainer, bmpGovExpTitle, bmpGovExpParent, bmpPrivateTitle, bmpPrivateContainer, bmpOtherInfoContainer);
    var businessMyProfileFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "businessMyProfileFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessMyProfileFooter.setDefaultUnit(kony.flex.DP);
    var businessMyProfileSaveButton = new kony.ui.Button({
        "centerX": "50.00%",
        "centerY": "50.00%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "businessMyProfileSaveButton",
        "isVisible": true,
        "onClick": AS_Button_2734c15dfb1342599c619a91e8e7d7b1,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "89.06%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessMyProfileFooter.add(businessMyProfileSaveButton);
    var BusinessProfilefooterWith2Buttons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "BusinessProfilefooterWith2Buttons",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BusinessProfilefooterWith2Buttons.setDefaultUnit(kony.flex.DP);
    var BusinessProfileContinueButton = new kony.ui.Button({
        "centerX": "72%",
        "centerY": "51%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "BusinessProfileContinueButton",
        "isVisible": true,
        "onClick": AS_Button_fc4ccf04c3434ac98e2da763805b5750,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "40%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var BusinessProfileSaveButton = new kony.ui.Button({
        "centerX": "28%",
        "centerY": "51%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "40dp",
        "id": "BusinessProfileSaveButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_42d5fe199fbd4a02834ab76d2b7f6ff6,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Save",
        "width": "40%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    BusinessProfilefooterWith2Buttons.add(BusinessProfileContinueButton, BusinessProfileSaveButton);
    businessMyProfile.add(businessMyProfileHeader, businessMyProfileBody, businessMyProfileFooter, BusinessProfilefooterWith2Buttons);
};

function businessMyProfileGlobals() {
    businessMyProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsbusinessMyProfile,
        "enabledForIdleTimeout": false,
        "id": "businessMyProfile",
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
    businessMyProfile.info = {
        "kuid": "1236261b36ec4ae9bccbba8c33912563"
    };
};