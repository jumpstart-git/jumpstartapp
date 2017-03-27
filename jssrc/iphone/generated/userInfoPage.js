function addWidgetsuserInfoPage() {
    userInfoPage.setDefaultUnit(kony.flex.DP);
    var userInfoPageContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "userInfoPageContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    userInfoPageContainer.setDefaultUnit(kony.flex.DP);
    var infoHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "infoHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    infoHeader.setDefaultUnit(kony.flex.DP);
    var signedInLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "signedInLabel",
        "isVisible": true,
        "skin": "kindlyConfirmLabelSkin",
        "text": "Signed-in using your account from",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var supplyNationLogo = new kony.ui.Image2({
        "centerX": "50%",
        "id": "supplyNationLogo",
        "isVisible": true,
        "maxHeight": "50dp",
        "skin": "slImage",
        "src": "supplynation.png",
        "top": "12dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kindlyConfirmLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "kindlyConfirmLabel",
        "isVisible": true,
        "skin": "CopykindlyConfirmLabelSkin0c008d30e330d40",
        "text": "Kindly confirm the information below",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    infoHeader.add(signedInLabel, supplyNationLogo, kindlyConfirmLabel);
    var infoBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "60%",
        "horizontalScrollIndicator": true,
        "id": "infoBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0c57b5c4226aa45",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    infoBody.setDefaultUnit(kony.flex.DP);
    var nameLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "nameLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Name",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var nameInfoField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "nameInfoField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox04e2959e5442242",
        "text": "Robert Johansen",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var addressLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "addressLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Address",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var addressInfoField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "addressInfoField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox04e2959e5442242",
        "text": "18 Darling Harbour, Sydney 2000, NSW",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var companyLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "companyLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Company",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var companyInfoField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "companyInfoField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox04e2959e5442242",
        "text": "Kord Enterprise",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var roleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "roleLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Role",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var roleInfoField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "roleInfoField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "secureTextEntry": false,
        "skin": "CopyslTextBox04e2959e5442242",
        "text": "Marketing Director",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
        "width": "80%",
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
    var skillsLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "skillsLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Skills",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var skillListContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "skillListContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    skillListContainer.setDefaultUnit(kony.flex.DP);
    var skillsList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "skillsList",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    skillsList.setDefaultUnit(kony.flex.DP);
    var skill1 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "skill1",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "secureTextEntry": false,
        "skin": "CopyslTextBox04e2959e5442242",
        "text": "Content Marketing",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "10dp",
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
    skillsList.add(skill1);
    var addNewSkill = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "addNewSkill",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    addNewSkill.setDefaultUnit(kony.flex.DP);
    var addNewSkillButton = new kony.ui.Button({
        "bottom": "0dp",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "addNewSkillButton",
        "isVisible": true,
        "left": 0,
        "right": "0dp",
        "skin": "jumpStartBlackButton",
        "text": "+",
        "top": 0,
        "width": "40dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    addNewSkill.add(addNewSkillButton);
    skillListContainer.add(skillsList, addNewSkill);
    var availabilityLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "availabilityLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Availability",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var scheduleLabel = new kony.ui.Label({
        "centerX": "50%",
        "id": "scheduleLabel",
        "isVisible": true,
        "skin": "CopyslLabel02fc111ae931f4f",
        "text": "Schedule",
        "top": "20dp",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var daysOfTheWeekContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "daysOfTheWeekContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "15dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    daysOfTheWeekContainer.setDefaultUnit(kony.flex.DP);
    var monContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "monContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    monContainer.setDefaultUnit(kony.flex.DP);
    var mondayButt = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "mondayButt",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_07cb5338058a42b381366e0fd754fe1a,
        "skin": "CopyslButtonGlossBlue0ba05615168a342",
        "text": "M",
        "top": "0dp",
        "width": "40dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    monContainer.add(mondayButt);
    var tuesContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "tuesContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    tuesContainer.setDefaultUnit(kony.flex.DP);
    var tuesdayButt = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "tuesdayButt",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_c9123c82f53f477c91c06dc10c90cf3a,
        "skin": "CopyslButtonGlossBlue0ba05615168a342",
        "text": "T",
        "top": "0dp",
        "width": "40dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    tuesContainer.add(tuesdayButt);
    var wedContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "wedContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    wedContainer.setDefaultUnit(kony.flex.DP);
    var wednesdayButt = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "wednesdayButt",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_83a5650a1fd54092aa2fecae3e7cddb2,
        "skin": "CopyslButtonGlossBlue0ba05615168a342",
        "text": "W",
        "top": "0dp",
        "width": "40dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    wedContainer.add(wednesdayButt);
    var thursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "thursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    thursContainer.setDefaultUnit(kony.flex.DP);
    var thursdayButt = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "thursdayButt",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_464ff8ae4d34452392e51dcda0fde9cc,
        "skin": "CopyslButtonGlossBlue0ba05615168a342",
        "text": "TH",
        "top": "0dp",
        "width": "40dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    thursContainer.add(thursdayButt);
    var friContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "friContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    friContainer.setDefaultUnit(kony.flex.DP);
    var fridayButt = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "fridayButt",
        "isVisible": true,
        "left": "10dp",
        "onClick": AS_Button_04cfbb34142c469d81d8ca8d5bc65e0d,
        "skin": "CopyslButtonGlossBlue0ba05615168a342",
        "text": "F",
        "top": "0dp",
        "width": "40dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    friContainer.add(fridayButt);
    daysOfTheWeekContainer.add(monContainer, tuesContainer, wedContainer, thursContainer, friContainer);
    var timeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "centerX": "50%",
        "clipBounds": true,
        "id": "timeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "20dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    timeContainer.setDefaultUnit(kony.flex.DP);
    var fromContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fromContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    fromContainer.setDefaultUnit(kony.flex.DP);
    var fromLabel = new kony.ui.Label({
        "id": "fromLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02f4686c0437c47",
        "text": "From",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var timeDropdown = new kony.ui.ListBox({
        "height": "40dp",
        "id": "timeDropdown",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "7:00"],
            ["lb2", "7:30"],
            ["lb3", "8:00"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "7:00"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var dayNightDropdown = new kony.ui.ListBox({
        "height": "40dp",
        "id": "dayNightDropdown",
        "isVisible": true,
        "masterData": [
            ["lb1", "AM"],
            ["lb2", "PM"]
        ],
        "right": 0,
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "AM"],
        "skin": "slListBox",
        "top": "25dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    fromContainer.add(fromLabel, timeDropdown, dayNightDropdown);
    var toContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "toContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    toContainer.setDefaultUnit(kony.flex.DP);
    var toLabel = new kony.ui.Label({
        "id": "toLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02f4686c0437c47",
        "text": "To",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var toTimeDropdown = new kony.ui.ListBox({
        "height": "40dp",
        "id": "toTimeDropdown",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["lb1", "7:00"],
            ["lb2", "7:30"],
            ["lb3", "8:00"]
        ],
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "7:00"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var toDayNightDropdown = new kony.ui.ListBox({
        "height": "40dp",
        "id": "toDayNightDropdown",
        "isVisible": true,
        "masterData": [
            ["lb1", "AM"],
            ["lb2", "PM"]
        ],
        "right": 0,
        "selectedKey": "lb1",
        "selectedKeyValue": ["lb1", "AM"],
        "skin": "slListBox",
        "top": "25dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "groupCells": false,
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    toContainer.add(toLabel, toTimeDropdown, toDayNightDropdown);
    timeContainer.add(fromContainer, toContainer);
    var Button0667cdbac0f0c46 = new kony.ui.Button({
        "bottom": "25dp",
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "Button0667cdbac0f0c46",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslButtonGlossBlue09b22b83f041242",
        "text": "Add another schedule +",
        "top": "20dp",
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
    infoBody.add(nameLabel, nameInfoField, addressLabel, addressInfoField, companyLabel, companyInfoField, roleLabel, roleInfoField, skillsLabel, skillListContainer, availabilityLabel, scheduleLabel, daysOfTheWeekContainer, timeContainer, Button0667cdbac0f0c46);
    var infoFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "infoFooter",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    infoFooter.setDefaultUnit(kony.flex.DP);
    var continueButton = new kony.ui.Button({
        "centerX": "50.00%",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossBlue0f5e9b292eb6f46",
        "height": "50dp",
        "id": "continueButton",
        "isVisible": true,
        "onClick": AS_Button_a7b0aead332447b8bef76dcfcc1fdabe,
        "skin": "jump",
        "text": "Continue",
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
    infoFooter.add(continueButton);
    userInfoPageContainer.add(infoHeader, infoBody, infoFooter);
    userInfoPage.add(userInfoPageContainer);
};

function userInfoPageGlobals() {
    userInfoPage = new kony.ui.Form2({
        "addWidgets": addWidgetsuserInfoPage,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "userInfoPage",
        "init": AS_Form_0955c260e9cd47709155085e6373b9c2,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "skin": "CopyslForm015ab3b9387c447"
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
    userInfoPage.info = {
        "kuid": "53d976c79dea4ed4b99b930ec54016aa"
    };
};