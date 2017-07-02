function addWidgetsReportingPage() {
    ReportingPage.setDefaultUnit(kony.flex.DP);
    var ReportingContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "ReportingContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReportingContainer.setDefaultUnit(kony.flex.DP);
    var ReportingHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "ReportingHeader",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0edf1ab8e311d42",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReportingHeader.setDefaultUnit(kony.flex.DP);
    var ReportingHdr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "ReportingHdr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    ReportingHdr.setDefaultUnit(kony.flex.DP);
    var ReportingLbl = new kony.ui.Label({
        "centerX": "45%",
        "centerY": "50%",
        "id": "ReportingLbl",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0915f96fdcc9744",
        "text": "Reporting",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    ReportingHdr.add(ReportingLbl);
    var ReportingBackBtnFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "ReportingBackBtnFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    ReportingBackBtnFlex.setDefaultUnit(kony.flex.DP);
    var ReportingBackBtn = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "ReportingBackBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_d0f960c7858e420ebfef3cbd38e96dab,
        "skin": "CopyslButtonGlossBlue0bf41f90f91ed47",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ReportingBackBtnFlex.add(ReportingBackBtn);
    ReportingHeader.add(ReportingHdr, ReportingBackBtnFlex);
    var ReportingData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "ReportingData",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02c344f41a6b645",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReportingData.setDefaultUnit(kony.flex.DP);
    var ReportingdataFlex = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "centerX": "50%",
        "clipBounds": true,
        "enableScrolling": false,
        "height": "90%",
        "horizontalScrollIndicator": true,
        "id": "ReportingdataFlex",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "jumpStartFlexScrollBG242",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReportingdataFlex.setDefaultUnit(kony.flex.DP);
    var FlexContainer09ad03cca127049 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer09ad03cca127049",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer09ad03cca127049.setDefaultUnit(kony.flex.DP);
    var ReceipientsTxt = new kony.ui.Label({
        "id": "ReceipientsTxt",
        "isVisible": true,
        "left": "35%",
        "skin": "CopyslLabel0990acc5456ef4a",
        "text": "Recipients are separated by \",\"",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ReceipientsLbl = new kony.ui.Label({
        "id": "ReceipientsLbl",
        "isVisible": true,
        "left": 20,
        "skin": "jumpStartLabel10099",
        "text": "Email to*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22dp",
        "width": "40%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer09ad03cca127049.add(ReceipientsTxt, ReceipientsLbl);
    var ReceipientsTxtArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "jumpStartTextAreaSkin",
        "height": "120dp",
        "id": "ReceipientsTxtArea",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_CHAT,
        "numberOfVisibleLines": 3,
        "skin": "jumpStartTextAreaSkin",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "11dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    var StartDateLbl = new kony.ui.Label({
        "centerX": "50%",
        "id": "StartDateLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Reporting start date*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "13dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var StartDateCalendar = new kony.ui.Calendar({
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "StartDateCalendar",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "jumpStartCalendarSkin",
        "top": "11dp",
        "viewConfig": {},
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "90%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var EndDateLbl = new kony.ui.Label({
        "centerX": "50.67%",
        "id": "EndDateLbl",
        "isVisible": true,
        "left": "0dp",
        "skin": "jumpStartLabel10099",
        "text": "Reporting end date*",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22dp",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var EndDateCalendar = new kony.ui.Calendar({
        "bottom": "15dp",
        "calendarIcon": "calendaricon.png",
        "centerX": "50%",
        "dateComponents": [28, 10, 2016, 0, 0, 0],
        "dateFormat": "dd/MM/yyyy",
        "day": 28,
        "focusSkin": "jumpStartCalendarSkin",
        "formattedDate": "28/10/2016",
        "height": "40dp",
        "hour": 0,
        "id": "EndDateCalendar",
        "isVisible": true,
        "left": "0dp",
        "minutes": 0,
        "month": 10,
        "seconds": 0,
        "skin": "jumpStartCalendarSkin",
        "top": "9dp",
        "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
        "width": "90%",
        "year": 2016,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ReportingdataFlex.add(FlexContainer09ad03cca127049, ReceipientsTxtArea, StartDateLbl, StartDateCalendar, EndDateLbl, EndDateCalendar);
    var ReportingButtons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 10,
        "clipBounds": true,
        "height": "10%",
        "id": "ReportingButtons",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReportingButtons.setDefaultUnit(kony.flex.DP);
    var CancelBtn = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed08df36053b2d74b",
        "height": "45dp",
        "id": "CancelBtn",
        "isVisible": true,
        "left": "19dp",
        "onClick": AS_Button_2fcd5c5fee8d4b7e8a42a88c96695455,
        "skin": "ngnyBackButton",
        "text": "Cancel",
        "top": "0dp",
        "width": "42%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var sendReportsBtn = new kony.ui.Button({
        "focusSkin": "ngnyPressedGreenButton",
        "height": "45dp",
        "id": "sendReportsBtn",
        "isVisible": true,
        "left": "52%",
        "onClick": AS_Button_7427b749460c4190b7d37fc9de5e757e,
        "skin": "ngnyPrimaryGreenButton",
        "text": "Send reports",
        "top": "0dp",
        "width": "43%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ReportingButtons.add(CancelBtn, sendReportsBtn);
    ReportingData.add(ReportingdataFlex, ReportingButtons);
    var ReportingActionsContainer = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "focusSkin": "CopyslFSbox0a8b8a77fb3c94d",
        "height": "10%",
        "horizontalScrollIndicator": true,
        "id": "ReportingActionsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox09cf026619b994b",
        "top": "10%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    ReportingActionsContainer.setDefaultUnit(kony.flex.DP);
    var corporateFlexContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "corporateFlexContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    corporateFlexContainer.setDefaultUnit(kony.flex.DP);
    var corporateIndicatorFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "corporateIndicatorFlex",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox030edd0b138f94a",
        "top": "95%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    corporateIndicatorFlex.setDefaultUnit(kony.flex.DP);
    corporateIndicatorFlex.add();
    var corporateBtn = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0337fde95a8224a",
        "height": "95%",
        "id": "corporateBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_818e7942c75141a6a70c4118e4c27791,
        "skin": "salmaSkin",
        "text": "Corporate Volunteer Hours Report",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    corporateFlexContainer.add(corporateIndicatorFlex, corporateBtn);
    var supplyNationContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "supplyNationContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    supplyNationContainer.setDefaultUnit(kony.flex.DP);
    var supplyNationIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "supplyNationIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox030edd0b138f94a",
        "top": "95%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    supplyNationIndicator.setDefaultUnit(kony.flex.DP);
    supplyNationIndicator.add();
    var supplyNationBtn = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0ad0ffd1ab50544",
        "height": "95%",
        "id": "supplyNationBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_6fa79a6c2954455aa3b72d34934c3504,
        "skin": "CopyslButtonGlossBlue02c7c6d4109894f",
        "text": "Supply Nation Volunteer Hours report",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    supplyNationContainer.add(supplyNationIndicator, supplyNationBtn);
    var IndigenousBusinessContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "IndigenousBusinessContainer",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    IndigenousBusinessContainer.setDefaultUnit(kony.flex.DP);
    var BusinessIndicator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "BusinessIndicator",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox030edd0b138f94a",
        "top": "95%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BusinessIndicator.setDefaultUnit(kony.flex.DP);
    BusinessIndicator.add();
    var businessBtn = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed047a777945d1a48",
        "height": "95%",
        "id": "businessBtn",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_395cc1c2c1cb40af83e6c4308d1dd377,
        "skin": "CopyslButtonGlossBlue0bd3167a4c99f42",
        "text": "Indigenous Business Volunteer Hours Report",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    IndigenousBusinessContainer.add(BusinessIndicator, businessBtn);
    ReportingActionsContainer.add(corporateFlexContainer, supplyNationContainer, IndigenousBusinessContainer);
    ReportingContainer.add(ReportingHeader, ReportingData, ReportingActionsContainer);
    ReportingPage.add(ReportingContainer);
};

function ReportingPageGlobals() {
    ReportingPage = new kony.ui.Form2({
        "addWidgets": addWidgetsReportingPage,
        "enabledForIdleTimeout": false,
        "id": "ReportingPage",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_4b8f6c7320214bb784011926590506f0,
        "skin": "slForm"
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