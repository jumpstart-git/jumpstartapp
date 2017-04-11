function addWidgetsregistrationSchedulePage() {
    registrationSchedulePage.setDefaultUnit(kony.flex.DP);
    var regScheduleInfoContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "regScheduleInfoContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    regScheduleInfoContainer.setDefaultUnit(kony.flex.DP);
    var registrationPageScheduleTitle = new kony.ui.Label({
        "bottom": "20dp",
        "centerX": "50%",
        "id": "registrationPageScheduleTitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel180",
        "text": "Availability Information",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var availabilityLabel = new kony.ui.Label({
        "id": "availabilityLabel",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Day of the week*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var daysOfTheWeekContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "daysOfTheWeekContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0acdf85d25e6545",
        "top": "10dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    daysOfTheWeekContainer.setDefaultUnit(kony.flex.DP);
    var regMondayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regMondayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "MON",
        "top": "0dp",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regTuesdayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regTuesdayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "TUE",
        "top": "0dp",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regWednesdayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regWednesdayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "WED",
        "top": "0dp",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regThursdayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regThursdayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "THU",
        "top": "0dp",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regFridayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regFridayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "FRI",
        "top": "0dp",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regSaturdayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regSaturdayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "SAT",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regSundayButton = new kony.ui.Button({
        "focusSkin": "jumpStartGreenButton100",
        "height": "40dp",
        "id": "regSundayButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_96f53f9d2528473e839285f80c2202b8,
        "skin": "jumpStartGrayButton90",
        "text": "SUN",
        "top": "0dp",
        "width": "12%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    daysOfTheWeekContainer.add(regMondayButton, regTuesdayButton, regWednesdayButton, regThursdayButton, regFridayButton, regSaturdayButton, regSundayButton);
    var timeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "bottom": "15dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "timeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "20dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    timeContainer.setDefaultUnit(kony.flex.DP);
    var fromTimeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "fromTimeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    fromTimeContainer.setDefaultUnit(kony.flex.DP);
    var lblFrom = new kony.ui.Label({
        "id": "lblFrom",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02f4686c0437c47",
        "text": "From",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var fromTimeDropdown = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "45dp",
        "id": "fromTimeDropdown",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["1:00", "1:00"],
            ["1:30", "1:30"],
            ["2:00", "2:00"],
            ["2:30", "2:30"],
            ["3:00", "3:00"],
            ["3:30", "3:30"],
            ["4:00", "4:00"],
            ["4:30", "4:30"],
            ["5:00", "5:00"],
            ["5:30", "5:30"],
            ["6:00", "6:00"],
            ["6:30", "6:30"],
            ["7:00", "7:00"],
            ["7:30", "7:30"],
            ["8:00", "8:00"],
            ["8:30", "8:30"],
            ["9:00", "9:00"],
            ["9:30", "9:30"],
            ["10:00", "10:00"],
            ["10:30", "10:30"],
            ["11:00", "11:00"],
            ["11:30", "11:30"],
            ["12:00", "12:00"],
            ["12:30", "12:30"]
        ],
        "onSelection": AS_ListBox_db4a8dab83fc4abe9a5a3265ca96d017,
        "selectedKey": "9:00",
        "selectedKeyValue": ["9:00", "9:00"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var fromMeridiem = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "45dp",
        "id": "fromMeridiem",
        "isVisible": true,
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "onSelection": AS_ListBox_db4a8dab83fc4abe9a5a3265ca96d017,
        "right": 0,
        "selectedKey": "AM",
        "selectedKeyValue": ["AM", "AM"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    fromTimeContainer.add(lblFrom, fromTimeDropdown, fromMeridiem);
    var toTimeContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "toTimeContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "45%"
    }, {}, {});
    toTimeContainer.setDefaultUnit(kony.flex.DP);
    var lblTo = new kony.ui.Label({
        "id": "lblTo",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel02f4686c0437c47",
        "text": "To",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var toTimeDropdown = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "45dp",
        "id": "toTimeDropdown",
        "isVisible": true,
        "left": "0dp",
        "masterData": [
            ["1:00", "1:00"],
            ["1:30", "1:30"],
            ["2:00", "2:00"],
            ["2:30", "2:30"],
            ["3:00", "3:00"],
            ["3:30", "3:30"],
            ["4:00", "4:00"],
            ["4:30", "4:30"],
            ["5:00", "5:00"],
            ["5:30", "5:30"],
            ["6:00", "6:00"],
            ["6:30", "6:30"],
            ["7:00", "7:00"],
            ["7:30", "7:30"],
            ["8:00", "8:00"],
            ["8:30", "8:30"],
            ["9:00", "9:00"],
            ["9:30", "9:30"],
            ["10:00", "10:00"],
            ["10:30", "10:30"],
            ["11:00", "11:00"],
            ["11:30", "11:30"],
            ["12:00", "12:00"],
            ["12:30", "12:30"]
        ],
        "onSelection": AS_ListBox_db4a8dab83fc4abe9a5a3265ca96d017,
        "selectedKey": "10:00",
        "selectedKeyValue": ["10:00", "10:00"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var toMeridiem = new kony.ui.ListBox({
        "focusSkin": "jumpStartDropDown100",
        "height": "45dp",
        "id": "toMeridiem",
        "isVisible": true,
        "masterData": [
            ["AM", "AM"],
            ["PM", "PM"]
        ],
        "onSelection": AS_ListBox_db4a8dab83fc4abe9a5a3265ca96d017,
        "right": 0,
        "selectedKey": "AM",
        "selectedKeyValue": ["AM", "AM"],
        "skin": "jumpStartDropDown100",
        "top": "25dp",
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [2, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    toTimeContainer.add(lblTo, toTimeDropdown, toMeridiem);
    timeContainer.add(fromTimeContainer, toTimeContainer);
    regScheduleInfoContainer.add(registrationPageScheduleTitle, availabilityLabel, daysOfTheWeekContainer, timeContainer);
    var regScheduleInfoFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "4dp",
        "clipBounds": true,
        "height": "45dp",
        "id": "regScheduleInfoFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "jumpStartBGFFFBorder214",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleInfoFooter.setDefaultUnit(kony.flex.DP);
    var regScheduleInfoBackButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "jumpStartGreenButton",
        "height": "45dp",
        "id": "regScheduleInfoBackButton",
        "isVisible": true,
        "left": "1%",
        "onClick": AS_Button_175a73b33d63400f969d9134fd454626,
        "skin": "jumpStartGrayButton110",
        "text": "Back",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regScheduleInfoContinueButton = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "regScheduleInfoContinueButton",
        "isVisible": true,
        "left": 7,
        "onClick": AS_Button_0e0b60a287be4f9a9c6fddeb813125b5,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Continue",
        "width": "48%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    regScheduleInfoFooter.add(regScheduleInfoBackButton, regScheduleInfoContinueButton);
    var regScheduleOutsideHoursModal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "regScheduleOutsideHoursModal",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "generalModalBG",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleOutsideHoursModal.setDefaultUnit(kony.flex.DP);
    var regScheduleOutsideHoursContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "regScheduleOutsideHoursContainer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "jumpStartBGFFF",
        "width": "90%"
    }, {}, {});
    regScheduleOutsideHoursContainer.setDefaultUnit(kony.flex.DP);
    var regScheduleOutsideHoursHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "regScheduleOutsideHoursHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleOutsideHoursHeader.setDefaultUnit(kony.flex.DP);
    var requestModalTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "requestModalTitle",
        "isVisible": true,
        "skin": "jumpStartLabelOrange140",
        "text": "Warning",
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
    regScheduleOutsideHoursHeader.add(requestModalTitle);
    var regScheduleOutsideHoursBody = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "45%",
        "id": "regScheduleOutsideHoursBody",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleOutsideHoursBody.setDefaultUnit(kony.flex.DP);
    var regScheduleOutsideHoursText = new kony.ui.RichText({
        "centerX": "50%",
        "id": "regScheduleOutsideHoursText",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartRT140",
        "text": "You have entered a schedule outside regular working hours. By choosing to continue, you acknowledge that this will invalidate your working hours in the report",
        "top": "0dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    regScheduleOutsideHoursBody.add(regScheduleOutsideHoursText);
    var regScheduleOutsideHoursFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "regScheduleOutsideHoursFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    regScheduleOutsideHoursFooter.setDefaultUnit(kony.flex.DP);
    var regOutsideHoursYes = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "ngnyPressedGreenButton",
        "height": "50dp",
        "id": "regOutsideHoursYes",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_3f5d4786a61e4507804b2e211de4800a,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Agree and continue",
        "top": "15dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var regOutsideHoursNo = new kony.ui.RichText({
        "centerX": "50%",
        "id": "regOutsideHoursNo",
        "isVisible": true,
        "onClick": AS_RichText_c27b302f6b7a4a9290f211e6e3852ef5,
        "onTouchStart": AS_RichText_cc11bc18ec5f417295c622bdded5da6b,
        "skin": "markAsComplete",
        "text": "Cancel",
        "top": 20,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    regScheduleOutsideHoursFooter.add(regOutsideHoursYes, regOutsideHoursNo);
    regScheduleOutsideHoursContainer.add(regScheduleOutsideHoursHeader, regScheduleOutsideHoursBody, regScheduleOutsideHoursFooter);
    regScheduleOutsideHoursModal.add(regScheduleOutsideHoursContainer);
    registrationSchedulePage.add(regScheduleInfoContainer, regScheduleInfoFooter, regScheduleOutsideHoursModal);
};

function registrationSchedulePageGlobals() {
    registrationSchedulePage = new kony.ui.Form2({
        "addWidgets": addWidgetsregistrationSchedulePage,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "id": "registrationSchedulePage",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "jumpStartFormBGFFF"
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
    registrationSchedulePage.info = {
        "kuid": "a246a313e1db4789b86d057ba020f115"
    };
};