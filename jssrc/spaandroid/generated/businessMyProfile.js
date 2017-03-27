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
        "skin": "slImage",
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
        "skin": "jumpStartLabel100",
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
    var bmpNumbersTitle = new kony.ui.Label({
        "id": "bmpNumbersTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var bmpBusinessAddressTitle = new kony.ui.Label({
        "id": "bmpBusinessAddressTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
        "skin": "jumpStartLabel100",
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
    var bmpPercentOfIndiOwnershipTitle = new kony.ui.Label({
        "id": "bmpPercentOfIndiOwnershipTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
        "skin": "jumpStartLabel100",
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
    var bmpPercentIndiEmploymentTitle = new kony.ui.Label({
        "id": "bmpPercentIndiEmploymentTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var bmpSectorTitle = new kony.ui.Label({
        "id": "bmpSectorTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var bmpAffiliationsTitle = new kony.ui.Label({
        "id": "bmpAffiliationsTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel100",
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
    var bmpReachTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bmpReachTitle",
        "isVisible": true,
        "skin": "jumpStartLabel100",
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
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "bmpReachContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
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
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    bmpReachInternationalButtonContainer.setDefaultUnit(kony.flex.DP);
    bmpReachInternationalButtonContainer.add();
    var bmpReachAustraliaButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpReachAustraliaButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    bmpReachAustraliaButtonContainer.setDefaultUnit(kony.flex.DP);
    bmpReachAustraliaButtonContainer.add();
    var bmpReachStateButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpReachStateButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    bmpReachStateButtonContainer.setDefaultUnit(kony.flex.DP);
    bmpReachStateButtonContainer.add();
    bmpReachContainer.add(bmpReachInternationalButtonContainer, bmpReachAustraliaButtonContainer, bmpReachStateButtonContainer);
    var bmpGovExpTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bmpGovExpTitle",
        "isVisible": true,
        "skin": "jumpStartLabel100",
        "text": "Previous Experience to Government",
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
    var bmpGovExpParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "bmpGovExpParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
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
    bmpGovExpLocalButtonContainer.add();
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
    bmpGovExpStateButtonContainer.add();
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
    bmpGovExpCommonwealthButtonContainer.add();
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
    bmpGovExpInternationalButtonContainer.add();
    bmpGovExpBottom.add(bmpGovExpCommonwealthButtonContainer, bmpGovExpInternationalButtonContainer);
    bmpGovExpParent.add(bmpGovExpTop, bmpGovExpBottom);
    var bmpPrivateTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bmpPrivateTitle",
        "isVisible": true,
        "skin": "jumpStartLabel100",
        "text": "Private",
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
    var bmpPrivateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "bmpPrivateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
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
    bmpPrivateMultinationalButtonContainer.add();
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
    bmpPrivateSMEButtonContainer.add();
    bmpPrivateContainer.add(bmpPrivateMultinationalButtonContainer, bmpPrivateSMEButtonContainer);
    var bmpOtherInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "bmpOtherInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bmpOtherInfoContainer.setDefaultUnit(kony.flex.DP);
    var bmpNonProfitParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bmpNonProfitParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    bmpNonProfitParent.setDefaultUnit(kony.flex.DP);
    var bmpNonProfitTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bmpNonProfitTitle",
        "isVisible": true,
        "skin": "jumpStartLabel100",
        "text": "Not for Profit",
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
        "centerX": "50%",
        "id": "bmpNoExpTitle",
        "isVisible": true,
        "skin": "jumpStartLabel100",
        "text": "No Experience",
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
    bmpOtherInfoContainer.add(bmpNonProfitParent, bmpNoExpParent);
    businessMyProfileBody.add(bmpBusinessNameTitle, bmpBusinessNameInput, bmpNumbersTitle, bmpNumbersInput, bmpBusinessAddressTitle, bmpBusinessAddressInput, bmpOwnershipInfoLabel, bmpNoOfIndiOwnersTitle, bmpNoOfIndiOwnersInput, bmpPercentOfIndiOwnershipTitle, bmpPercentOfIndiOwnershipInput, bmpEmpInfoLabel, bmpNoOfEmployeesTitle, bmpNoOfEmployeesInput, bmpPercentIndiEmploymentTitle, bmpPercentIndiEmploymentInput, bmpSectorTitle, bmpSectorInput, bmpAffiliationsTitle, bmpAffiliationsInput, bmpReachTitle, bmpReachContainer, bmpGovExpTitle, bmpGovExpParent, bmpPrivateTitle, bmpPrivateContainer, bmpOtherInfoContainer);
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
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "jumpStartGreenButton120",
        "height": "40dp",
        "id": "businessMyProfileSaveButton",
        "isVisible": true,
        "onClick": AS_Button_2734c15dfb1342599c619a91e8e7d7b1,
        "skin": "jumpStartGreenButton110",
        "text": "Save",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    businessMyProfileFooter.add(businessMyProfileSaveButton);
    businessMyProfile.add(businessMyProfileHeader, businessMyProfileBody, businessMyProfileFooter);
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