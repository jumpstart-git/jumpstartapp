function addWidgetsbusinessDetailsConfirmationPage() {
    businessDetailsConfirmationPage.setDefaultUnit(kony.flex.DP);
    var businessDetailsConfirmationHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "businessDetailsConfirmationHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "jumpStartBG242",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    businessDetailsConfirmationHeader.setDefaultUnit(kony.flex.DP);
    var regGreeting = new kony.ui.Label({
        "centerX": "50%",
        "id": "regGreeting",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Login using your account from",
        "top": "8%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var regHeaderPic = new kony.ui.Image2({
        "centerX": "50%",
        "height": "40dp",
        "id": "regHeaderPic",
        "isVisible": true,
        "skin": "slImage",
        "src": "supplynation.png",
        "top": "10%",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regSelectionLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "regSelectionLabel",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Kindly confirm the information below",
        "top": "10%",
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
    businessDetailsConfirmationHeader.add(regGreeting, regHeaderPic, regSelectionLabel);
    var businessDetailsConfirmationBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": true,
        "height": "70%",
        "horizontalScrollIndicator": true,
        "id": "businessDetailsConfirmationBody",
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
    businessDetailsConfirmationBody.setDefaultUnit(kony.flex.DP);
    var bdcBusinessNameTitle = new kony.ui.Label({
        "id": "bdcBusinessNameTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcBusinessNameInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcBusinessNameInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcNumbersTitle = new kony.ui.Label({
        "id": "bdcNumbersTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNumbersInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcNumbersInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcBusinessAddressTitle = new kony.ui.Label({
        "id": "bdcBusinessAddressTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcBusinessAddressInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcBusinessAddressInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcOwnershipInfoLabel = new kony.ui.Label({
        "id": "bdcOwnershipInfoLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNoOfIndiOwnersTitle = new kony.ui.Label({
        "id": "bdcNoOfIndiOwnersTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNoOfIndiOwnersInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcNoOfIndiOwnersInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcPercentOfIndiOwnershipTitle = new kony.ui.Label({
        "id": "bdcPercentOfIndiOwnershipTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcPercentOfIndiOwnershipInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcPercentOfIndiOwnershipInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcEmpInfoLabel = new kony.ui.Label({
        "id": "bdcEmpInfoLabel",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNoOfEmployeesTitle = new kony.ui.Label({
        "id": "bdcNoOfEmployeesTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNoOfEmployeesInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcNoOfEmployeesInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcPercentIndiEmploymentTitle = new kony.ui.Label({
        "id": "bdcPercentIndiEmploymentTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcPercentIndiEmploymentInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcPercentIndiEmploymentInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcSectorTitle = new kony.ui.Label({
        "id": "bdcSectorTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcSectorInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcSectorInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcAffiliationsTitle = new kony.ui.Label({
        "id": "bdcAffiliationsTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcAffiliationsInput = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "bdcAffiliationsInput",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTextChange": AS_TextField_76fc6da85889407eb4b1eb48be13eb7b,
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
    var bdcReachTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bdcReachTitle",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcReachContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "bdcReachContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bdcReachContainer.setDefaultUnit(kony.flex.DP);
    var reachInternationalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reachInternationalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    reachInternationalButtonContainer.setDefaultUnit(kony.flex.DP);
    var reachInternationalButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "reachInternationalButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "International",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    reachInternationalButtonContainer.add(reachInternationalButton);
    var reachAustraliaButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reachAustraliaButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    reachAustraliaButtonContainer.setDefaultUnit(kony.flex.DP);
    var reachAustraliaButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "reachAustraliaButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "Australia-wide",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    reachAustraliaButtonContainer.add(reachAustraliaButton);
    var reachStateButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "reachStateButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "33%",
        "zIndex": 1
    }, {}, {});
    reachStateButtonContainer.setDefaultUnit(kony.flex.DP);
    var reachStateButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "reachStateButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "State/Territory",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    reachStateButtonContainer.add(reachStateButton);
    bdcReachContainer.add(reachInternationalButtonContainer, reachAustraliaButtonContainer, reachStateButtonContainer);
    var bdcGovExpTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bdcGovExpTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Previous Experience to Government",
        "top": "20dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcGovExpParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "bdcGovExpParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpParent.setDefaultUnit(kony.flex.DP);
    var bdcGovExpTop = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcGovExpTop",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpTop.setDefaultUnit(kony.flex.DP);
    var bdcGovExpLocalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcGovExpLocalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpLocalButtonContainer.setDefaultUnit(kony.flex.DP);
    var bdcGovExpLocalButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcGovExpLocalButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "Local Councils",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcGovExpLocalButtonContainer.add(bdcGovExpLocalButton);
    var bdcGovExpStateButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcGovExpStateButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpStateButtonContainer.setDefaultUnit(kony.flex.DP);
    var bdcGovExpStateButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcGovExpStateButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "State/Territory",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcGovExpStateButtonContainer.add(bdcGovExpStateButton);
    bdcGovExpTop.add(bdcGovExpLocalButtonContainer, bdcGovExpStateButtonContainer);
    var bdcGovExpBottom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcGovExpBottom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpBottom.setDefaultUnit(kony.flex.DP);
    var bdcGovExpCommonwealthButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcGovExpCommonwealthButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpCommonwealthButtonContainer.setDefaultUnit(kony.flex.DP);
    var bdcGovExpCommonwealthButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcGovExpCommonwealthButton",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "Commonwealth",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcGovExpCommonwealthButtonContainer.add(bdcGovExpCommonwealthButton);
    var bdcGovExpInternationalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcGovExpInternationalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bdcGovExpInternationalButtonContainer.setDefaultUnit(kony.flex.DP);
    var bdcGovExpInternationalButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcGovExpInternationalButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "International",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcGovExpInternationalButtonContainer.add(bdcGovExpInternationalButton);
    bdcGovExpBottom.add(bdcGovExpCommonwealthButtonContainer, bdcGovExpInternationalButtonContainer);
    bdcGovExpParent.add(bdcGovExpTop, bdcGovExpBottom);
    var bdcPrivateTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bdcPrivateTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Private",
        "top": "20dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcPrivateContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "bdcPrivateContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bdcPrivateContainer.setDefaultUnit(kony.flex.DP);
    var bdcPrivateMultinationalButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcPrivateMultinationalButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bdcPrivateMultinationalButtonContainer.setDefaultUnit(kony.flex.DP);
    var bdcPrivateMultinationalButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcPrivateMultinationalButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "Large Multinational",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcPrivateMultinationalButtonContainer.add(bdcPrivateMultinationalButton);
    var bdcPrivateSMEButtonContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcPrivateSMEButtonContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    bdcPrivateSMEButtonContainer.setDefaultUnit(kony.flex.DP);
    var bdcPrivateSMEButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcPrivateSMEButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "Small and Medium Enterprises",
        "top": "0dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcPrivateSMEButtonContainer.add(bdcPrivateSMEButton);
    bdcPrivateContainer.add(bdcPrivateMultinationalButtonContainer, bdcPrivateSMEButtonContainer);
    var bdcOtherInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "bdcOtherInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    bdcOtherInfoContainer.setDefaultUnit(kony.flex.DP);
    var bdcNonProfitParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcNonProfitParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    bdcNonProfitParent.setDefaultUnit(kony.flex.DP);
    var bdcNonProfitTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bdcNonProfitTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "Not for Profit",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNonProfitButton = new kony.ui.Button({
        "bottom": "15dp",
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcNonProfitButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "Not for Profit",
        "top": "10dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcNonProfitParent.add(bdcNonProfitTitle, bdcNonProfitButton);
    var bdcNoExpParent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "bdcNoExpParent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    bdcNoExpParent.setDefaultUnit(kony.flex.DP);
    var bdcNoExpTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "bdcNoExpTitle",
        "isVisible": true,
        "skin": "jumpStartLabel10099",
        "text": "No Experience",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var bdcNoExpButton = new kony.ui.Button({
        "bottom": "15dp",
        "centerX": "50%",
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "bdcNoExpButton",
        "isVisible": true,
        "onClick": AS_Button_3f0b779809604cbebc08b5f48b09b3dd,
        "skin": "jumpStartGrayButton90",
        "text": "No Experience",
        "top": "10dp",
        "width": "95%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    bdcNoExpParent.add(bdcNoExpTitle, bdcNoExpButton);
    bdcOtherInfoContainer.add(bdcNonProfitParent, bdcNoExpParent);
    businessDetailsConfirmationBody.add(bdcBusinessNameTitle, bdcBusinessNameInput, bdcNumbersTitle, bdcNumbersInput, bdcBusinessAddressTitle, bdcBusinessAddressInput, bdcOwnershipInfoLabel, bdcNoOfIndiOwnersTitle, bdcNoOfIndiOwnersInput, bdcPercentOfIndiOwnershipTitle, bdcPercentOfIndiOwnershipInput, bdcEmpInfoLabel, bdcNoOfEmployeesTitle, bdcNoOfEmployeesInput, bdcPercentIndiEmploymentTitle, bdcPercentIndiEmploymentInput, bdcSectorTitle, bdcSectorInput, bdcAffiliationsTitle, bdcAffiliationsInput, bdcReachTitle, bdcReachContainer, bdcGovExpTitle, bdcGovExpParent, bdcPrivateTitle, bdcPrivateContainer, bdcOtherInfoContainer);
    var businessDetailsConfirmationFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "businessDetailsConfirmationFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    businessDetailsConfirmationFooter.setDefaultUnit(kony.flex.DP);
    var registrationSubmitButton = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "jumpStartGreenButton",
        "height": "40dp",
        "id": "registrationSubmitButton",
        "isVisible": true,
        "onClick": AS_Button_fffee9df82384213aed6037aa6abf457,
        "skin": "jump",
        "text": "Confirm",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    businessDetailsConfirmationFooter.add(registrationSubmitButton);
    businessDetailsConfirmationPage.add(businessDetailsConfirmationHeader, businessDetailsConfirmationBody, businessDetailsConfirmationFooter);
};

function businessDetailsConfirmationPageGlobals() {
    businessDetailsConfirmationPage = new kony.ui.Form2({
        "addWidgets": addWidgetsbusinessDetailsConfirmationPage,
        "enabledForIdleTimeout": false,
        "id": "businessDetailsConfirmationPage",
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
    businessDetailsConfirmationPage.info = {
        "kuid": "731354b5d5504d5daac5e9457a384ba0"
    };
};